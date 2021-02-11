import { cloneDeep } from 'lodash-es';
import CountTo from 'vue-count-to/src/vue-countTo';

const Component = cloneDeep(CountTo);

Component.unmounted = Component.destroyed
Reflect.deleteProperty(Component, 'destroyed');

export default {
  name: 'CountTo',
  emits: ['callback', 'mountedCallback'],
  ...Component
};
