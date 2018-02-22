// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import App from './App';
// import router from './router';
// import HelloWorld from '@/components/HelloWorld';
import counter from '@/components/counter';
import hw from '@/components/hello-world';

Vue.config.productionTip = false;

// Register counter
Vue.component('counter', counter);
Vue.component('hello-world', hw);

/* eslint-disable no-new */
new Vue({
  el: '#app'
  // router,
  // components: { App } // Another point to local registration for components
  // template: '<App/>'
});
