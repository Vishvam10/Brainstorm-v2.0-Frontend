import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "./../views/LoginPage";
import SignupPage from "./../views/SignupPage";
import DeckManagementPage from "./../views/DeckManagementPage";
import CardManagementPage from "./../views/CardManagementPage";
import ErrorPage from "./../views/ErrorPage";
import PlayPage from "./../views/PlayPage";
import SettingsPage from "./../views/SettingsPage";
import UploadPage from "./../views/UploadPage";

import Home from "./../components/Home";
import Dashboard from "./../components/Dashboard";
import AddDeck from "./../components/AddDeck";
import EditDeck from "./../components/EditDeck";
import EditCard from "./../components/EditCard";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupPage,
  },
  {
    path: "/deck",
    name: "deck",
    component: DeckManagementPage,
    children: [
      {
        path: "add",
        component: AddDeck,
      },
      {
        path: "edit/:deck_id",
        component: EditDeck,
      },
    ],
  },
  {
    path: "/card",
    name: "card",
    component: CardManagementPage,
    children: [
      {
        path: "edit/:deck_id",
        name: "editCard",
        component: EditCard,
      },
    ],
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/play/:deck_id",
    name: "play",
    component: PlayPage,
  },
  {
    path: "/upload/:deck_id",
    name: "upload",
    component: UploadPage,
  },
  {
    path: "/me",
    name: "settings",
    component: SettingsPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
