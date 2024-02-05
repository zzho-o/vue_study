import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List";
import Home from "./components/Home";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/List",
    component: List,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
