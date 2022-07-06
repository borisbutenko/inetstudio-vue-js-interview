import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  routes: [
    {
      name: "Users",
      path: "/users",
      alias: "/",
      component: () => import("@/pages/Users"),
    },
    {
      name: "other",
      path: "*",
      redirect: "/",
    },
  ],
})
