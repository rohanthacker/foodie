// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ActivityIndicator from "./components/ActivityIndicator";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Restaurant from "@/components/Restaurant";

library.add(fas);

Vue.config.productionTip = false;

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("ActivityIndicator", ActivityIndicator);
Vue.component("Restaurant", Restaurant);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
