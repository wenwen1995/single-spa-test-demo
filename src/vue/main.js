import Vue from 'vue';
import App from './App.vue';
import singleSpaVue from 'single-spa-vue';

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vuePage',
    render: h => h(App),
  },
});

//引导
export const bootstrap = vueLifecycles.bootstrap;
//挂载
export const mount = vueLifecycles.mount;
//卸载
export const unmount = vueLifecycles.unmount;
