




import Vue from 'vue'
import Router from 'vue-router'




  // ######################## Public  ##############################
  import Home from "~/pages/public/Home.vue";
  import About from "~/pages/public/About.vue";
  // import Contact from "~/pages/public/Contact.vue";
  import SinglPost from "~/pages/public/singlPost.vue";
  import CategoryPage from "~/pages/public/categoryPage.vue";


    // ######################## dashboard  ##############################
  import Dashboard from "~/pages/dashboard/dashboard.vue";
  import Post from "~/pages/dashboard/post/index.vue";
  import PosCreate from "~/pages/dashboard/post/create.vue";
  import PosEdit from "~/pages/dashboard/post/edit.vue";
  import PostTrashed from "~/pages/dashboard/post/trash.vue";
  import Login from "~/pages/dashboard/Login.vue";
  import Category from "~/pages/dashboard/categories.vue";
  import User from "~/pages/dashboard/users.vue";
  import Settings from "~/pages/dashboard/settings.vue";
  import Profile from "~/pages/dashboard/profile.vue";



Vue.use(Router)

export function createRouter() {

  const rout =  new Router({
    mode: 'history',
    routes: [

 // ######################## Publicc Route ##############################

 {
  path: "/",
  name: "Home",
  component: Home
},
{
  path: "/about",
  name: "About",
  component: About ,

},


{
  path: "/post/:id",
  name: "singl.post",
  component: SinglPost ,

},

{
  path: "/category/:id",
  name: "category.page",
  component: CategoryPage ,

},
// ######################## End Public ##############################




  // ######################## dashboard ##############################
  {
    path: "/admin/dashboard",
    name: "admin-dashboard",
    component: Dashboard,
    meta:{
      secure :true
    }
  },

  //posts
  {
    path: "/admin/posts",
    name: "admin-posts",
    component: Post,
    meta:{
      secure :true
    }
  },

  {
    path: "/admin/posts/create",
    name: "admin-post-create",
    component: PosCreate,
    meta:{
      secure :true
    }
  },
  {
    path: "/admin/posts/:id/edit",
    name: "admin-posts-edit",
    component: PosEdit,
    meta:{
      secure :true
    }
  },

  {
    path: "/admin/posts/trashed",
    name: "admin-posts-trash",
    component: PostTrashed,
    meta:{
      // secure :true
      admin :true
    }
  },

  {
    path: "/admin/categories",
    name: "admin-categories",
    component: Category,
    meta:{
      secure :true
    }
  },
  {
    path: "/admin/users",
    name: "admin-users",
    component: User,
    meta:{
      // secure :true
      admin :true
    }
  },
  {
    path: "/admin/settings",
    name: "admin-settings",
    component: Settings,
    meta:{
      // secure :true,
      admin :true
    }
  },
  {
    path: "/admin/profile",
    name: "Profile",
    component: Profile,
    // meta:{
    //   secure :true
    // }
  },
  {
    path: "/admin",
    name: "login-admin",
    component: Login,
    meta:{
      guest :true
    }
  },

  // ####################### End dashboard ##############################

    ]


  })


  return rout;


}


