/* eslint-disable */
import BasicExample from './basic';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: BasicExample,
        }
    ]
});

new Vue({
    el: '#example',
    router,
    render: h => <router-view />,
})
