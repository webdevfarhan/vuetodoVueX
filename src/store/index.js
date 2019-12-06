import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/ToDos';

// Load VueX
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
  modules: {
    todos
  }
});
