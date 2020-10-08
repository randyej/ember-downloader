import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['ed-table-body'],

  tableConfig: null, // object to be passed in
  tableData: null, // array to be passed in
  selectedRows: null, // array to be passed in
  toggleSelectRow: () => {}, // action to be passed in

  columns: computed('tableConfig.columns', {
    get() {
      return this.tableConfig.columns
    }
  }),

});
