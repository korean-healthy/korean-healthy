import "babel-polyfill";

import Vue from "vue";
import LuminousUI from "luminous-ui";
import "luminous-ui/dist/luminous.bundle.css";
Vue.use(LuminousUI);

import App from "./App.vue";

new Vue({
	el: '#app',
	render(h){
		return h(App);
	}
});
