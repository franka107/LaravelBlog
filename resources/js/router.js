import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from './components/pages/Home.vue'
import Tags from './components/pages/Tags.vue'

const routes = [
    //project routes...
    {
        path: '/',
        component: Home
    },
    {
        path: '/tags',
        component: Tags
    }
]

export default new Router({
    mode: 'history',
    routes
})
