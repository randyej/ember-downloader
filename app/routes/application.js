import Route from '@ember/routing/route';

export default Route.extend({

  model() {
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

    return {
      tableConfig,
      tableData
    };
  }

});
