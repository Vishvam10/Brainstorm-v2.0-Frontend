import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "./../views/LoginPage";
import SignupPage from "./../views/SignupPage";
import EditDeckPage from "./../views/EditDeckPage";
import AddDeckPage from "./../views/AddDeckPage";

import Home from "./../components/Home";
import Dashboard from "./../components/Dashboard";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignupPage,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/deck",
    name: "Deck",
    children: [
      {
        path: "/add/:deck_id",
        component: AddDeckPage,
      },
      {
        path: "/edit/:deck_id",
        component: EditDeckPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
