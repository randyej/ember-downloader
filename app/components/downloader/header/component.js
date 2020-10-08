import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['ed-header'],

  selectableRowCount: 0, // to be passed in
  selectedRowCount: 0, // to be passed in
  toggleSelectAll: () => {}, // action to be passed in
  downloadSelected: () => {}, // action to be passed in

  iconName: computed('selectableRowCount', 'selectedRowCount', {
    get() {
      let icon = 'square';
      if (this.selectedRowCount === this.selectableRowCount) {
        icon = 'check-square';
      } else if (this.selectedRowCount > 0 && this.selectedRowCount < this.selectableRowCount) {
        icon = 'minus-square';
      }
      return icon;
    }
  }),

  selectedLabel: computed('selectedRowCount', {
    get() {
      let label = 'None Selected';
      if (this.selectedRowCount > 0) {
        return `Selected ${this.selectedRowCount}`;
      }
      return label;
    }
  })

});
