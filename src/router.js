import Vue from "vue"
import VueRouter from "vue-router"

import Users from "@/pages/Users"

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      name: "Users",
      path: "/users",
      alias: "/",
      component: Users,
    },
    {
      name: "other",
      path: "*",
      redirect: "/",
    },
  ],
})
