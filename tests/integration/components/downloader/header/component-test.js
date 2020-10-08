import { module, skip, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | downloader/header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('selectableRowCount', 0);
    this.set('selectedRowCount', 0);
    this.set('toggleSelectAll', () => {});
    this.set('downloadSelected', () => {});
    
    await render(hbs `{{downloader/header
      selectableRowCount=selectableRowCount
      selectedRowCount=selectedRowCount
      toggleSelectAll=(action toggleSelectAll)
      downloadSelected=(action downloadSelected)
    }}`);

    assert.ok(find('.ed-header'), 'header rendered');
  });

  skip('TODO select-all checkbox should be unchecked if no rows are selected', async function(assert) {
    assert(true, true, 'TODO select-all checkbox should be unselected if no rows are selected');
  });

  skip('TODO select-all checkbox should be checked if all selectable rows are selected', async function(assert) {
    assert(true, true, 'TODO select-all checkbox should be unselected if no rows are selected');
  });

  skip('TODO select-all checkbox should be indeterminate if some (not all) selectable rows are selected', async function(assert) {
    assert(true, true, 'TODO select-all checkbox should be unselected if no rows are selected');
  });

  skip('TODO select-all checkbox triggers toggleSelectAll() when clicked', async function(assert) {
    assert(true, true, 'TODO select-all checkbox triggers toggleSelectAll() when clicked');
  });

  skip('TODO selected count label should display "None Selected" if no rows are selected', async function(assert) {
    assert(true, true, 'TODO selected count label should display None Selected if no rows are selected');
  });

  skip('TODO selected count label should display "Selected n" if rows are selected', async function(assert) {
    assert(true, true, 'TODO selected count label should display None Selected if no rows are selected');
  });

  skip('TODO Download Selected button triggers downloadSelected() when clicked', async function(assert) {
    assert(true, true, 'TODO select-all checkbox triggers toggleSelectAll() when clicked');
  });



});
