import { registerApplication, start } from 'single-spa'

registerApplication(
  // Name of our single-spa application
  'vue',
  // loadingFunction
  () => import ('./src/vue/main.js'),
  // activityFunction
  (location) => {
    console.log('location.pathname --?',location.pathname)
   return  location.pathname.indexOf('vue') > -1 ? true : false
  }
);

registerApplication(
  // Name of our single-spa application
  'react',
  // loadingFunction
  () => import ('./src/react/main.js'),
  // activityFunction
  (location) => location.pathname.indexOf('react') > -1 ? true : false
);

start();