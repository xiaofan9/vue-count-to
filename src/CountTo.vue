<script>
import { cloneDeep } from 'lodash-es';
import CountTo from 'vue-count-to';

const Component = cloneDeep(CountTo);

Component.unmounted = Component.destroyed
Reflect.deleteProperty(Component, 'destroyed');

export default {
  name: 'CountTo',
  render() {
    return <Component {...this.$attrs}></Component>
  }
};
</script>
