import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | downloader/checkbox', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs `{{downloader/checkbox}}`);
    assert.ok(find('input').classList.contains('ed-checkbox'), 'checkbox rendered');
    assert.notOk(find('input').classList.contains('checked'), 'checkbox not checked');
    assert.notOk(find('input').classList.contains('disabled'), 'checkbox not disabled');
  });

  test('has the checked class', async function(assert) {
    await render(hbs `{{downloader/checkbox checked=true}}`);
    assert.ok(find('input').classList.contains('checked'), 'checkbox is checked');
  });

  test('has the disabled class', async function(assert) {
    await render(hbs `{{downloader/checkbox disabled=true}}`);
    assert.ok(find('input').classList.contains('disabled'), 'checkbox is disabled');
  });

});
