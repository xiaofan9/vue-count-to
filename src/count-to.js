import Component from 'vue-count-to/src/vue-countTo.vue';

Component.unmounted = Component.destroyed
Reflect.deleteProperty(Component, 'destroyed');

export default {
  name: 'CountTo',
  emits: ['callback', 'mountedCallback'],
  ...Component
};
