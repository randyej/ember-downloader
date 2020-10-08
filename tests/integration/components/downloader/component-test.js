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

const tableData = [
  { name: 'smss.exe', device: 'Stark', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe', status: 'scheduled' },
  { name: 'netsh.exe', device: 'Targaryen', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe', status: 'available' },
  { name: 'uxtheme.dll', device: 'Lanniester', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll', status: 'available' },
  { name: 'cryptbase.dll', device: 'Martell', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll', status: 'scheduled' },
  { name: '7za.exe', device: 'Baratheon', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: 'scheduled' }
];

module('Integration | Component | downloader', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('tableConfig', tableConfig);
    this.set('tableData', tableData);
    
    await render(hbs `{{downloader
      tableConfig=tableConfig
      tableData=tableData
    }}`);

    assert.ok(find('.ed-ember-downloader'), 'downloader rendered');
  });

  skip('TODO clicking select-all checkbox should select all selectable items if none are selected', async function(assert) {
    assert(true, true, 'TODO clicking select-all checkbox should select all selectable items if none are selected');
  });

  skip('TODO clicking select-all checkbox should select all selectable items if only some are selected', async function(assert) {
    assert(true, true, 'TODO clicking select-all checkbox should select all selectable items if only some are selected');
  });

  skip('TODO clicking select-all checkbox should de-select all if all selectable item are selected', async function(assert) {
    assert(true, true, 'TODO clicking select-all checkbox should de-select all if all selectable item are selected');
  });

  skip('TODO clicking Download Selected button should generate an alert displaying path and device of all selected files', async function(assert) {
    assert(true, true, 'TODO clicking Download Selected button should generate an alert displaying path and device of all selected files');
  });

});
