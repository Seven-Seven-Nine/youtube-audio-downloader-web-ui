import { createRouter, createWebHistory, type Router } from "vue-router";
import URLDownloadPage from "../pages/URLDownloadPage.vue";
import MultiLoadingPage from "../pages/MultiLoadingPage.vue";
import SortAudioPage from "../pages/SortAudioPage.vue";
import SettingsPage from "../pages/SettingsPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

const routes = [
    { path: "/", component: URLDownloadPage },
    { path: "/url-loading", component: URLDownloadPage },
    { path: "/multi-loading", component: MultiLoadingPage },
    { path: "/sort-audio", component: SortAudioPage },
    { path: "/settings", component: SettingsPage },

    { path: "/:pathMatch(.*)*", component: NotFoundPage }
];

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;