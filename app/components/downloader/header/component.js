import Component from '@ember/component';
import { computed } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

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
      scheduleOnce('afterRender', this, this.updateIndeterminate);
      return icon;
    }
  }),

  updateIndeterminate() {
    let isIndeterminate = false;
    if (this.iconName === 'minus-square') {
      isIndeterminate = true;
    }
    this.element.querySelector('input').indeterminate = isIndeterminate;
  },

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
