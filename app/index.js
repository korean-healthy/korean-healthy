import "babel-polyfill";

import Vue from "vue";
import LuminousUI from "luminous-ui";
Vue.use(LuminousUI);

import App from "./App.vue";

new Vue({
	el: '#app',
	render(h){
		return h(App);
	}
});
