import {createRouter,createWebHashHistory} from "vue-router";
import Home from "./../views/Home.vue"
import Avawpns from "./../views/AvaWpns.vue";
import Mapcycle from "./../views/Mapcycle.vue";
import WeaponCFG from "./../views/WeaponCFG.vue";
import CustomCMD from "./../views/CustomCMD";

const router = createRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/avawpns', component: Avawpns},
        {path: '/mapcycle', component: Mapcycle},
        {path: '/weaponcfg', component: WeaponCFG},
        {path: '/customcmd', component: CustomCMD},
    ],
    history: createWebHashHistory()
});

export default router;