import Home from '../components/Home'
import PostsList from '../components/Post/List'
import PostsView from '../components/Post/View'
import PostsCreate from '../components/Post/Create'
import PostsEdit from '../components/Post/Edit'

const routes = [
  /*
  **
  ** Generic routes
  **
  */

  // public home routes
  { path: '/', name: 'public.home', component: Home },

  /*
  **
  ** Post routes
  **
  */

  // public posts routes
  { path: '/posts', name: 'public.post.list', component: PostsList },
  { path: '/posts/:id', name: 'public.post.view', component: PostsView },

  // private posts routes
  { path: '/posts/new', name: 'admin.post.new', component: PostsCreate },
  { path: '/posts/:id/edit', name: 'admin.post.edit', component: PostsEdit }
]

export default routes