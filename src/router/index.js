import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Posts from '../views/Posts.vue';
import Post from "../views/Post.vue";
import ManagePosts from '../views/dashboard/ManagePosts.vue';
import AddPost from '../views/dashboard/AddPost.vue';
import EditPost from '../views/dashboard/EditPost.vue';
import Settings from '../views/Settings.vue';
import Login from '../views/Login.vue';
import NotFound from '../views/NotFound.vue';
import { useAuthStore } from '../stores/auth';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { 
      requiresAuth: false,
    }
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts,
    meta: { 
      requiresAuth: false,
    }
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post,
    props: true,
    meta: { 
      requiresAuth: false,
    }
  },
 {
    path: '/dashboard/add-post',
    name: 'addPost',
    component: AddPost,
    meta: { 
      requiresAuth: true,
      requiredRole: 'ROLE_AUTHOR' 
    }
  },
 {
    path: '/dashboard/manage-posts',
    name: 'managePosts',
    component: ManagePosts,
    meta: { 
      requiresAuth: true,
      requiredRole: 'ROLE_AUTHOR' 
    }
  },
  {
    path: '/dashboard/edit-post/:id',
    name: 'editPost',
    component: EditPost,
    props: true,
    meta: { 
      requiresAuth: true,
      requiredRole: 'ROLE_AUTHOR' 
    }
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
    meta: { 
      requiresAuth: true,
    }
  },
  {
    path: '/auth/login',
    name: 'login',
    component: Login,
    meta: { 
      requiresAuth: false,
    }
  },
  { 
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: NotFound,
  meta: { 
      requiresAuth: false,
    }
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to) => {
  const auth = useAuthStore();

    if (to.meta.requiresAuth) {
      if (!auth.username) {
        return '/auth/login'
      }

      if (to.meta.requiredRole && to.meta.requiredRole !== auth.roles) {
        return '/auth/login'
      }
  }

})

export default router