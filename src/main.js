import { createApp } from 'vue';
import {createRouter,createWebHistory} from "vue-router";
import App from "./App.vue";
import Home from "./views/Home.vue"
import Avawpns from "./views/AvaWpns.vue";
import Mapcycle from "./views/Mapcycle.vue";
import WeaponCFG from "./views/WeaponCFG.vue";
import CustomCMD from "./views/CustomCMD";
import "@/assets/bootstrap-min.css";

const router = createRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/avawpns', component: Avawpns},
        {path: '/mapcycle', component: Mapcycle},
        {path: '/weaponcfg', component: WeaponCFG},
        {path: '/customcmd', component: CustomCMD},
    ],
    history: createWebHistory()
});

createApp(App).use(router).mount("#app");