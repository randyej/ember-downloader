import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['ed-ember-downloader'],

  tableConfig: null, // object to be passed in
  tableData: null, // array to be passed in

  selectedRows: null,

  init() {
    this._super(...arguments);
    this.tableConfig = this.tableConfig || { 'columns': [] };
    this.tableData = this.tableData || [];
    this.selectedRows = [];
  },

  selectableRowCount: computed('tableData', {
    get() {
      let count = 0;
      this.tableData.forEach(row => {
        if (row.status === "available") {
          count++
        }
      });
      return count;
    }
  }),

  selectedRowCount: computed('selectedRows.[]', {
    get() {
      return this.selectedRows.length;
    }
  }),

  actions: {
    toggleSelectAll() {
      if (this.selectedRowCount === this.selectableRowCount) {
        this.selectedRows.clear();
      } else {
        this.tableData.forEach(row => {
          if (row.status !== "available") {
            return;
          }
          const indexOfRow = this.selectedRows.indexOf(row);
          if (indexOfRow < 0) {
            this.selectedRows.pushObject(row);
          }
        });
      }
    },

    toggleSelectRow(row) {
      if (row.status !== "available") {
        return;
      }
      const indexOfRow = this.selectedRows.indexOf(row);
      if (indexOfRow > -1) {
        this.selectedRows.removeAt(indexOfRow);
      } else {
        this.selectedRows.pushObject(row);
      }
    },

    downloadSelected() {
      if (this.selectedRowCount === 0) {
        return;
      }
      let alertMsg = '';
      this.selectedRows.forEach((row, i) => {
        if (i > 0) {
          alertMsg += "\n";
        }
        alertMsg += `Path: ${row.path}, Device: ${row.device}`;
      });
      window.alert(alertMsg);
    }
  }

});
