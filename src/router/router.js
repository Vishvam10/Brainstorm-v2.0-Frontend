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
    path: "/deck",
    name: "Deck",
    component: DeckManagementPage,
    children: [
      {
        path: "add/:deck_id",
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
    name: "Card",
    component: CardManagementPage,
    children: [
      {
        path: "edit/:deck_id",
        component: EditCard,
      },
    ],
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/play/:deck_id",
    name: "Play",
    component: PlayPage,
  },
  {
    path: "/upload/:deck_id",
    name: "Upload",
    component: UploadPage,
  },
  {
    path: "/me",
    name: "Settings",
    component: SettingsPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
