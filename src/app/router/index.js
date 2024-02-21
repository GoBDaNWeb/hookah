import { createRouter, createWebHistory } from "vue-router";

import { Main } from "@/pages/main";
import { Catering } from "@/pages/catering";
import { Delivery } from "@/pages/delivery";
import { Manual } from "@/pages/manual";
import { Partners } from "@/pages/partners";
import { Contacts } from "@/pages/contacts";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Main,
    },
    {
      path: "/catering",
      name: "catering",
      component: Catering,
    },
    {
      path: "/delivery",
      name: "delivery",
      component: Delivery,
    },
    {
      path: "/manual",
      name: "manual",
      component: Manual,
    },
    {
      path: "/partners",
      name: "partners",
      component: Partners,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
    },
  ],
});

export default router;
