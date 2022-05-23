import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

// component: () => import("../views/ABCView.vue"),
// route level code-splitting this generates a separate chunk (ABC.[hash].js) for this route

declare module "vue-router" {
  interface RouteMeta {
    search: Array<string>;
    icon: string;
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
        icon: "home",
      },
    },
    {
      path: "/test/simulation",
      name: "Simulation",
      component: () => import("../views/SimulationView.vue"),
      meta: {
        search: ["test", "simulation"],
        icon: "flask-vial",
      },
    },
    {
      path: "/test/generation",
      name: "Generation",
      component: () => import("../views/GenerationView.vue"),
      meta: {
        search: ["test", "generation"],
        icon: "compass-drafting",
      },
    },
    {
      path: "/environment/calendar",
      name: "Calendar",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["environment", "calendar", "cycles", "time"],
        icon: "calendar-days",
      },
    },
    {
      path: "/environment/biomes",
      name: "Biomes",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["environment", "biomes"],
        icon: "globe",
      },
    },
    {
      path: "/environment/stages",
      name: "Stages",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["environment", "stages"],
        icon: "clapperboard",
      },
    },
    {
      path: "/environment/wildlife",
      name: "Wildlife",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["environment", "wildlife"],
        icon: "paw",
      },
    },
    {
      path: "/environment/materials",
      name: "Materials",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["environment", "materials"],
        icon: "leaf",
      },
    },
    {
      path: "/civilizations/races",
      name: "Races",
      component: () => import("../views/RaceView.vue"),
      meta: {
        search: ["civilizations", "races"],
        icon: "people-group",
      },
    },
    {
      path: "/civilizations/sites",
      name: "Sites",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["civilizations", "sites"],
        icon: "flag",
      },
    },
    {
      path: "/civilizations/religions",
      name: "Religions",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["civilizations", "religions"],
        icon: "person-praying",
      },
    },
    {
      path: "/civilizations/military",
      name: "Military",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["civilizations", "military"],
        icon: "person-military-pointing",
      },
    },
    {
      path: "/civilizations/economics",
      name: "Economics",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["civilizations", "economics"],
        icon: "money-bill",
      },
    },
    {
      path: "/agent/attributes",
      name: "Attributes",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["agent", "attributes"],
        icon: "superscript",
      },
    },
    {
      path: "/agent/status",
      name: "Status",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["agent", "status"],
        icon: "person-circle-exclamation",
      },
    },
    {
      path: "/agent/skill",
      name: "Skill",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["agent", "skill"],
        icon: "arrow-up-right-dots",
      },
    },
    {
      path: "/agent/goals",
      name: "Goals",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["agent", "goals"],
        icon: "bullseye",
      },
    },
    {
      path: "/agent/beliefs",
      name: "Beliefs",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["agent", "beliefs"],
        icon: "heart",
      },
    },
    {
      path: "/agent/thoughts",
      name: "Thoughts",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["agent", "thoughts"],
        icon: "brain",
      },
    },
    {
      path: "/agent/ethics",
      name: "Ethics",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["agent", "ethics"],
        icon: "ribbon",
      },
    },
    {
      path: "/agent/needs",
      name: "Needs",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["agent", "needs"],
        icon: "list-check",
      },
    },
    {
      path: "/agent/actors",
      name: "Actors",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["agent", "actors"],
        icon: "user-large",
      },
    },
    {
      path: "/drama/hooks",
      name: "Story Hooks",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["drama", "hooks", "story"],
        icon: "masks-theater",
      },
    },
    {
      path: "/drama/dialog",
      name: "Dialog",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["drama", "dialog"],
        icon: "comment",
      },
    },
    {
      path: "/drama/verbs",
      name: "Verbs",
      component: () => import("../views/DatabaseView.vue"),
      meta: {
        search: ["drama", "verbs"],
        icon: "language",
      },
    },
  ],
});

export default router;