import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const bRoutes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const requireComponent = require.context(
  // Look for files in the current directory
  "../app",
  // Look in  subdirectories
  true,
  // Only include "_base-" prefixed .vue files
  /router.js$/
);

let routes = [...bRoutes];
// For each matching file name...
requireComponent.keys().forEach(fileName => {
  // Can use _ to turn route off
  if (fileName.indexOf("_") === -1) {
    routes = [...routes, ...requireComponent(fileName).default];
  }
});

const router = new VueRouter({
  routes: routes
});

export default router;
