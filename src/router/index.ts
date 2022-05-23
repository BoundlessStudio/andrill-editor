import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

// component: () => import("../views/ABCView.vue"), 
// route level code-splitting this generates a separate chunk (ABC.[hash].js) for this route

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
      meta: {
        icon: 'home'
      }
    },
    {
      path: "/simulation",
      name: "Simulation",
      component: () => import("../views/SimulationView.vue"), 
      meta: {
        icon: "flask-vial"
      }
    },
    {
      path: "/generation",
      name: "Generation",
      component: () => import("../views/GenerationView.vue"), 
      meta: {
        icon: "compass-drafting"
      }
    },
    {
      path: "/environment/calendar",
      name: "Calendar",
      component: () => import("../views/DatabaseView.vue"), 
      meta: {
        icon: "calendar-days"
      }
    },
    {
      path: "/environment/biomes",
      name: "Biomes",
      component: () => import("../views/DatabaseView.vue"), 
      meta: {
        icon: "layer-group"
      }
    },
    {
      path: "/environment/stages",
      name: "Stages",
      component: () => import("../views/DatabaseView.vue"), 
      meta: {
        icon: "map-pin"
      }
    },
    {
      path: "/environment/wildlife",
      name: "Wildlife",
      component: () => import("../views/DatabaseView.vue"), 
      meta: {
        icon: "paw"
      }
    },
    {
      path: "/environment/materials",
      name: "Materials",
      component: () => import("../views/DatabaseView.vue"), 
      meta: {
        icon: "leaf"
      }
    },
    {
      path: "/civilizations/races",
      name: "Races",
      component: () => import("../views/DatabaseView.vue"), 
      meta: {
        icon: "people-group"
      }
    },
    {
      path: "/civilizations/sites",
      name: "Sites",
      component: () => import("../views/DatabaseView.vue"), 
      meta: {
        icon: "building-flag"
      }
    },
    {
      path: "/civilizations/religions",
      name: "Religions",
      component: () => import("../views/DatabaseView.vue"), 
      meta: {
        icon: "person-praying"
      }
    },
    {
      path: "/civilizations/military",
      name: "Military",
      component: () => import("../views/DatabaseView.vue"), 
      meta: {
        icon: "person-military-pointing"
      }
    },
    {
      path: "/civilizations/economics",
      name: "Economics",
      component: () => import("../views/DatabaseView.vue"), 
      meta: {
        icon: "money-bill"
      }
    },
    {
      path: "/agent/actors",
      name: "Actors",
      component: () => import("../views/DatabaseView.vue"), 
      meta: {
        icon: "user-large"
      }
    },
    {
      path: "/agent/attributes",
      name: "Attributes",
      component: () => import("../views/DatabaseView.vue"), 
      meta: {
        icon: "superscript"
      }
    },
    {
      path: "/agent/status",
      name: "Status",
      component: () => import("../views/DatabaseView.vue"), 
      meta: {
        icon: "person-circle-exclamation"
      }
    },
    {
      path: "/agent/skill",
      name: "Skill",
      component: () => import("../views/DatabaseView.vue"), 
      meta: {
        icon: "arrow-up-right-dots"
      }
    },
    {
      path: "/agent/goals",
      name: "Goals",
      component: () => import("../views/DatabaseView.vue"), 
      meta: {
        icon: "arrow-up-right-dots"
      }
    },
    {
      path: "/agent/beliefs",
      name: "Beliefs",
      component: () => import("../views/DatabaseView.vue"), 
      meta: {
        icon: "heart"
      }
    },
    {
      path: "/agent/thoughts",
      name: "Thoughts",
      component: () => import("../views/DatabaseView.vue"), 
      meta: {
        icon: "brain"
      }
    },
    {
      path: "/agent/ethics",
      name: "Ethics",
      component: () => import("../views/DatabaseView.vue"), 
      meta: {
        icon: "ribbon"
      }
    },
    {
      path: "/agent/needs",
      name: "Needs",
      component: () => import("../views/DatabaseView.vue"), 
      meta: {
        icon: "list-check"
      }
    },
    {
      path: "/drama/hooks",
      name: "Story",
      component: () => import("../views/DatabaseView.vue"), 
      meta: {
        icon: "masks-theater"
      }
    },
    {
      path: "/drama/dialog",
      name: "Dialog",
      component: () => import("../views/DatabaseView.vue"), 
      meta: {
        icon: "comment"
      }
    },
    {
      path: "/drama/verbs",
      name: "Verbs",
      component: () => import("../views/DatabaseView.vue"), 
      meta: {
        icon: "language"
      }
    },
    
  ],
});

export default router;
