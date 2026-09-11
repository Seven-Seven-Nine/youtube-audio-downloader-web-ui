import { createRouter, createWebHistory, type Router, type RouteRecordRaw } from "vue-router";
import URLDownloadPage from "../pages/URLDownloadPage.vue";
import MultiLoadingPage from "../pages/MultiLoadingPage.vue";
import SortAudioPage from "../pages/SortAudioPage.vue";
import SettingsPage from "../pages/SettingsPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

const routes: RouteRecordRaw[] = [
    { 
        path: "/",
        name: "Home", 
        component: URLDownloadPage 
    },
    { 
        path: "/url-loading",
        name: "URL Download", 
        component: URLDownloadPage 
    },
    { 
        path: "/multi-loading",
        name: "Multi loading URL", 
        component: MultiLoadingPage 
    },
    { 
        path: "/sort-audio",
        name: "Sort audio",
        component: SortAudioPage 
    },
    { 
        path: "/settings",
        name: "Settings", 
        component: SettingsPage 
    },

    { 
        path: "/:pathMatch(.*)*",
        name: "Not found page",
        component: NotFoundPage 
    }
];

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;