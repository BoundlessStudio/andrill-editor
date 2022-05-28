import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

// component: () => import("../views/ABCView.vue"),
// route level code-splitting this generates a separate chunk (ABC.[hash].js) for this route

// onBeforeRouteLeave((to, from) => {
//   const answer = window.confirm(
//     'Do you really want to leave? you have unsaved changes!'
//   )
//   // cancel the navigation and stay on the same page
//   if (!answer) return false
// })

declare module "vue-router" {
  interface RouteMeta {
    search: Array<string>
    icons: Array<string>
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
      meta: {
        search: ["home", "search"],
        icons: ["home"],
      },
    },
    {
      path: "/test/simulation",
      name: "Simulation",
      component: () => import("../views/SimulationView.vue"),
      meta: {
        search: ["test", "simulation"],
        icons: ["flask-vial"],
      },
    },
    {
      path: "/test/generation",
      name: "Generation",
      component: () => import("../views/GenerationView.vue"),
      meta: {
        search: ["test", "generation"],
        icons: ["compass-drafting"],
      },
    },
    {
      path: "/environment/tilesets",
      name: "Tilesets",
      component: () => import("../views/TilesetView.vue"),
      meta: {
        search: ["environment", "tileset"],
        icons: ["map"],
      },
    },
    {
      path: "/environment/calendar",
      name: "Calendar",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["environment", "calendar", "cycles", "time"],
        icons: ["calendar-days"],
      },
    },
    {
      path: "/environment/biomes",
      name: "Biomes",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["environment", "biomes"],
        icons: ["globe"],
      },
    },
    {
      path: "/environment/stages",
      name: "Stages",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["environment", "stages"],
        icons: ["clapperboard"],
      },
    },
    {
      path: "/environment/wildlife",
      name: "Wildlife",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["environment", "wildlife"],
        icons: ["paw"],
      },
    },
    {
      path: "/environment/materials",
      name: "Materials",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["environment", "materials"],
        icons: ["leaf"],
      },
    },
    {
      path: "/civilization/races/:id?",
      name: "Races",
      component: () => import("../views/RaceView.vue"),
      meta: {
        search: ["civilization", "races"],
        icons: ["people-group"],
      },
    },
    {
      path: "/civilization/sites",
      name: "Sites",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["civilization", "sites"],
        icons: ["flag"],
      },
    },
    {
      path: "/civilization/religions",
      name: "Religions",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["civilization", "religions"],
        icons: ["person-praying"],
      },
    },
    {
      path: "/civilization/military",
      name: "Military",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["civilization", "military"],
        icons: ["person-military-pointing"],
      },
    },
    {
      path: "/civilization/economics",
      name: "Economics",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["civilization", "economics"],
        icons: ["money-bill"],
      },
    },
    {
      path: "/agent/attributes",
      name: "Attributes",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["agent", "attributes"],
        icons: ["superscript"],
      },
    },
    {
      path: "/agent/status",
      name: "Status",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["agent", "status"],
        icons: ["person-circle-exclamation"],
      },
    },
    {
      path: "/agent/skill",
      name: "Skill",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["agent", "skill"],
        icons: ["arrow-up-right-dots"],
      },
    },
    {
      path: "/agent/goals",
      name: "Goals",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["agent", "goals"],
        icons: ["bullseye"],
      },
    },
    {
      path: "/agent/beliefs",
      name: "Beliefs",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["agent", "beliefs"],
        icons: ["heart"],
      },
    },
    {
      path: "/agent/thoughts",
      name: "Thoughts",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["agent", "thoughts"],
        icons: ["brain"],
      },
    },
    {
      path: "/agent/ethics",
      name: "Ethics",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["agent", "ethics"],
        icons: ["ribbon"],
      },
    },
    {
      path: "/agent/needs",
      name: "Needs",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["agent", "needs"],
        icons: ["list-check"],
      },
    },
    {
      path: "/agent/actors",
      name: "Actors",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["agent", "actors"],
        icons: ["user-large"],
      },
    },
    {
      path: "/drama/hooks",
      name: "Story Hooks",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["drama", "hooks", "story"],
        icons: ["masks-theater"],
      },
    },
    {
      path: "/drama/dialog",
      name: "Dialog",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["drama", "dialog"],
        icons: ["comment"],
      },
    },
    {
      path: "/drama/verbs",
      name: "Verbs",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["drama", "verbs"],
        icons: ["language"],
      },
    },
  ],
});

export default router;