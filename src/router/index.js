import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Parent from '@/components/Parent';
import Child2 from '@/components/Child2';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent,
      children: [
        {
          path: '/',
          components: {
            child2: Child2
          }
        }
      ]
    }
  ]
});
