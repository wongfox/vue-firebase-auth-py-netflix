import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
var firebase = require("firebase/app");

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, 
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/user/Register.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import ('../views/user/Login.vue')
    }, 
    {
        path: '/inicio',
        name: 'Inicio',
        component: () => import('../views/Inicio.vue'),
        meta: { requiresAuth: true }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const rutaProtegida = to.matched.some(record => record.meta.requiresAuth); // devuelve un True si la ruta esta protegida
    const usuario = firebase.auth().currentUser; // devuelve un null si no esta logueado

    if (rutaProtegida === true && usuario == null) {
        next({ name: 'Home'});
    } else {
        next()
    }
});

export default router