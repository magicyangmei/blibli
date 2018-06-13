// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Header,Swipe, SwipeItem,Button,Navbar, TabItem, TabContainer, TabContainerItem ,Cell } from 'mint-ui';
import vuex from 'vuex'
Vue.use(vuex);

Vue.config.productionTip = false
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);
/* eslint-disable no-new */

const store = new vuex.Store({
  state:{
    count:0,
  },
  mutations:{
    increment(state){
      state.count ++
    }
  }
})


console.log(store.state.count) // -> 1
var app =  new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
// 全局注册
// app.component(router)