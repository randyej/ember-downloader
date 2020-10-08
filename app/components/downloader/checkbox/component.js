import Checkbox from '@ember/component/checkbox';

export default Checkbox.extend({
  classNames: ['ed-checkbox'],

  classNameBindings: [
    'checked',
    'disabled'
  ]

});
