import { module, skip, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const tableConfig = {
  columns: [
    {
      title: '', // column header title/label in the header row <td>'s
      titleClassNames: 'ed-col-checkbox', // will be appended to customize column header <td class="...">
      field: '', // data property name to render in the body <td>'s
      fieldClassNames: 'ed-col-checkbox', // will be appended to customize column data <td class="...">
      type: 'checkbox'
    },
    {
      title: 'Name',
      titleClassNames: 'ed-col-name',
      field: 'name',
      fieldClassNames: 'ed-col-name',
      width: ''
    },
    {
      title: 'Device',
      titleClassNames: 'ed-col-device',
      field: 'device',
      fieldClassNames: 'ed-col-device',
      width: ''
    },
    {
      title: 'Path',
      titleClassNames: 'ed-col-path',
      field: 'path',
      fieldClassNames: 'ed-col-path',
      width: ''
    },
    {
      title: 'Status',
      titleClassNames: 'ed-col-status',
      field: 'status',
      fieldClassNames: 'ed-col-status',
      width: ''
    }
  ]
};

module('Integration | Component | downloader/table-header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('tableConfig', tableConfig);
    
    await render(hbs `{{downloader/table-header
      tableConfig=tableConfig
    }}`);

    assert.ok(find('.ed-table-header'), 'table-header rendered');
  });

  skip('TODO it renders correct number of rows and cols', async function(assert) {
    assert(true, true, 'TODO it renders correct number of rows and cols');
  });

  skip('TODO it renders correct col header values', async function(assert) {
    assert(true, true, 'TODO it renders correct col header values');
  });

});
