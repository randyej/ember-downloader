import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['ed-table-header'],

  tableConfig: null, // object to be passed in

  columns: computed('tableConfig.columns', {
    get() {
      return this.tableConfig.columns
    }
  })

});
