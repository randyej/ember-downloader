import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, find, findAll, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { capitalize } from '@ember/string';

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

module('Integration | Component | downloader/table-body', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('tableConfig', {});
    this.set('tableData', []);
    this.set('selectedRows', []);
    this.set('toggleSelectRow', () => {});
    
    await render(hbs `{{downloader/table-body
      tableConfig=tableConfig
      tableData=tableData
      selectedRows=selectedRows
      toggleSelectRow=(action toggleSelectRow)
    }}`);

    assert.ok(find('.ed-table-body'), 'table-body rendered');
  });

  test('it renders correct number of rows and cols', async function(assert) {
    this.set('tableConfig', tableConfig);
    this.set('tableData', tableData);
    this.set('selectedRows', []);
    this.set('toggleSelectRow', () => {});
    const expectedRowCount = tableData.length;
    const expectedColCount = tableConfig.columns.length;
    
    await render(hbs `{{downloader/table-body
      tableConfig=tableConfig
      tableData=tableData
      selectedRows=selectedRows
      toggleSelectRow=(action toggleSelectRow)
    }}`);

    assert.equal(findAll('.ed-table-body tr').length, expectedRowCount, `table-body rendered ${expectedRowCount} rows`);
    assert.equal(findAll('.ed-table-body tr:nth-child(1) td').length, expectedRowCount, `table-body rendered ${expectedColCount} cols`);
  });

  test('it renders selected rows with .selected class', async function(assert) {
    this.set('tableConfig', tableConfig);
    this.set('tableData', tableData);
    this.set('selectedRows', [tableData[1], tableData[2]]);
    this.set('toggleSelectRow', () => {});
    
    await render(hbs `{{downloader/table-body
      tableConfig=tableConfig
      tableData=tableData
      selectedRows=selectedRows
      toggleSelectRow=(action toggleSelectRow)
    }}`);

    assert.notOk(find('.ed-table-body tr:nth-child(1)').classList.contains('selected'), 'row 1 is NOT selected');
    assert.ok(find('.ed-table-body tr:nth-child(2)').classList.contains('selected'), 'row 2 IS selected');
    assert.ok(find('.ed-table-body tr:nth-child(3)').classList.contains('selected'), 'row 3 IS selected');
    assert.notOk(find('.ed-table-body tr:nth-child(4)').classList.contains('selected'), 'row 4 is NOT selected');
    assert.notOk(find('.ed-table-body tr:nth-child(5)').classList.contains('selected'), 'row 5 is NOT selected');
  });

  test('it renders selected rows with checked checkboxes', async function(assert) {
    this.set('tableConfig', tableConfig);
    this.set('tableData', tableData);
    this.set('selectedRows', [tableData[1], tableData[2]]);
    this.set('toggleSelectRow', () => {});
    
    await render(hbs `{{downloader/table-body
      tableConfig=tableConfig
      tableData=tableData
      selectedRows=selectedRows
      toggleSelectRow=(action toggleSelectRow)
    }}`);

    assert.notOk(find('.ed-table-body tr:nth-child(1) td:nth-of-type(1) input[type=checkbox]:checked'), 'row 1 checkbox is NOT checked');
    assert.ok(find('.ed-table-body tr:nth-child(2) td:nth-of-type(1) input[type=checkbox]:checked'), 'row 2 checkbox IS checked');
    assert.ok(find('.ed-table-body tr:nth-child(3) td:nth-of-type(1) input[type=checkbox]:checked'), 'row 3 checkbox IS checked');
    assert.notOk(find('.ed-table-body tr:nth-child(4) td:nth-of-type(1) input[type=checkbox]:checked'), 'row 4 checkbox is NOT checked');
    assert.notOk(find('.ed-table-body tr:nth-child(5) td:nth-of-type(1) input[type=checkbox]:checked'), 'row 5 checkbox is NOT checked');
  });

  test('it renders available rows checkboxes enabled, other checkboxes as disabled', async function(assert) {
    this.set('tableConfig', tableConfig);
    this.set('tableData', tableData);
    this.set('selectedRows', []);
    this.set('toggleSelectRow', () => {});
    
    await render(hbs `{{downloader/table-body
      tableConfig=tableConfig
      tableData=tableData
      selectedRows=selectedRows
      toggleSelectRow=(action toggleSelectRow)
    }}`);

    assert.ok(find('.ed-table-body tr:nth-child(1) td:nth-of-type(1) input[type=checkbox]:disabled'), 'row 1 checkbox is DISABLED');
    assert.notOk(find('.ed-table-body tr:nth-child(2) td:nth-of-type(1) input[type=checkbox]:disabled'), 'row 2 checkbox is ENABLED');
    assert.notOk(find('.ed-table-body tr:nth-child(3) td:nth-of-type(1) input[type=checkbox]:disabled'), 'row 3 checkbox is ENABLED');
    assert.ok(find('.ed-table-body tr:nth-child(4) td:nth-of-type(1) input[type=checkbox]:disabled'), 'row 4 checkbox is DISABLED');
    assert.ok(find('.ed-table-body tr:nth-child(5) td:nth-of-type(1) input[type=checkbox]:disabled'), 'row 5 checkbox is DISABLED');
  });

  test('it triggers toggleSelectRow() when an enabled checkbox is clicked', async function(assert) {
    assert.expect(1);
    this.set('tableConfig', tableConfig);
    this.set('tableData', tableData);
    this.set('selectedRows', []);
    this.set('toggleSelectRow', (row) => {
      assert.equal(row, tableData[1], 'clicking row 2 checkbox triggered toggleSelectRow()'); // 2nd row
    });
    
    await render(hbs `{{downloader/table-body
      tableConfig=tableConfig
      tableData=tableData
      selectedRows=selectedRows
      toggleSelectRow=(action toggleSelectRow)
    }}`);

    // click 2nd row checkbox
    await click('.ed-table-body tr:nth-child(2) td:nth-of-type(1) input[type=checkbox]');
  });

  test('it renders available rows status col with available (green circle) icone', async function(assert) {
    this.set('tableConfig', tableConfig);
    this.set('tableData', tableData);
    this.set('selectedRows', []);
    this.set('toggleSelectRow', () => {});
    
    await render(hbs `{{downloader/table-body
      tableConfig=tableConfig
      tableData=tableData
      selectedRows=selectedRows
      toggleSelectRow=(action toggleSelectRow)
    }}`);

    assert.notOk(find('.ed-table-body tr:nth-child(1) td:nth-of-type(5) svg[data-icon=circle]'), 'row 1 available icon is NOT rendered');
    assert.ok(find('.ed-table-body tr:nth-child(2) td:nth-of-type(5) svg[data-icon=circle]'), 'row 2 available icon IS rendered');
    assert.ok(find('.ed-table-body tr:nth-child(3) td:nth-of-type(5) svg[data-icon=circle]'), 'row 3 available icon IS rendered');
    assert.notOk(find('.ed-table-body tr:nth-child(4) td:nth-of-type(5) svg[data-icon=circle]'), 'row 4 available icon is NOT rendered');
    assert.notOk(find('.ed-table-body tr:nth-child(5) td:nth-of-type(5) svg[data-icon=circle]'), 'row 5 available icon is NOT rendered');
  });

  test('it renders correct cell data values', async function(assert) {
    this.set('tableConfig', tableConfig);
    this.set('tableData', tableData);
    this.set('selectedRows', []);
    this.set('toggleSelectRow', () => {});
    
    await render(hbs `{{downloader/table-body
      tableConfig=tableConfig
      tableData=tableData
      selectedRows=selectedRows
      toggleSelectRow=(action toggleSelectRow)
    }}`);

    // check a couple of rows with different status values
    const expectedValues1 = ['', tableData[0].name, tableData[0].device, tableData[0].path, capitalize(tableData[0].status)];
    const row1Cells = findAll('.ed-table-body tr:nth-child(1) td');
    const row1Values = row1Cells.map(cell => {
      return cell.innerText.trim();
    });
    const expectedValues2 = ['', tableData[1].name, tableData[1].device, tableData[1].path, capitalize(tableData[1].status)];
    const row2Cells = findAll('.ed-table-body tr:nth-child(2) td');
    const row2Values = row2Cells.map(cell => {
      return cell.innerText.trim();
    });

    assert.deepEqual(row1Values, expectedValues1, 'row 1 values are correct');
    assert.deepEqual(row2Values, expectedValues2, 'row 2 values are correct');
  });

});
