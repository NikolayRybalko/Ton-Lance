import { createRouter, createWebHistory } from 'vue-router';
import Login_Page from '../views/Login_Page.vue';

const routes = [
    { path: '/login', name: 'Login_Page', component: Login_Page},
    { path: '/', redirect: '/login' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


