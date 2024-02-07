import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List";
import Home from "./components/Home";
import Detail from "./components/Detail";
import NoPage from "./components/NoPage";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/List",
    component: List,
  },
  {
    path: "/Detail/:id",
    component: Detail,
  },
  { path: "/:anything", component: NoPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
