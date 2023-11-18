import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Posts from '../views/Posts.vue'
import ManagePosts from '../views/ManagePosts.vue'
import AddPost from '../views/AddPost.vue'
import EditPost from '../views/EditPost.vue'
import Settings from '../views/Settings.vue'
// import AboutView from '../views/AboutView.vue'
//import ProductView from '../views/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts
  },
 {
    path: '/dashboard/add-post',
    name: 'addPost',
    component: AddPost
  },
 {
    path: '/dashboard/manage-posts',
    name: 'managePosts',
    component: ManagePosts
  },
  {
    path: '/dashboard/edit-post/:id',
    name: 'editPost',
    component: EditPost,
    props: true
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  }
// { 
//   path: '/:pathMatch(.*)*',
//   name: 'NotFound',
//   component: NotFound
// }
  
//  {
//    path: '/products/:id',
 //   name: 'product',
 //   component: ProductView,
//    props: true
//  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router