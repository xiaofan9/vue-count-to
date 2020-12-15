import countTo3 from './CountTo.vue';
import countTo from 'vue-count-to';

function install(app) {
  if(typeof app === 'function') {
    app.component('count-to', countTo);
  } else {
    app.component('count-to', countTo3);
  }
}

export default {
  install
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
