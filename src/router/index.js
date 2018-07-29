import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: HelloWorld
    },
    {
      path: "/",
      name: "location",
      component: HelloWorld
    },
    {
      path: "/",
      name: "cusine",
      component: HelloWorld
    },
    {
      path: "/",
      name: "list",
      component: HelloWorld
    },
    {
      path: "/",
      name: "detail",
      component: HelloWorld
    }
  ]
});
