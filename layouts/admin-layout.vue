<template>
  <div>
 <!-- Sidenav -->
  <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div  class="scrollbar-inner">
      <!-- Brand -->
      <div class="sidenav-header  align-items-center">
        <a class="navbar-brand" href="javascript:void(0)">
          <img src="/images/blue.png" class="navbar-brand-img" alt="...">
          <!-- <img src="/assets/img/brand/admin.jpg" class="navbar-brand-img" alt="..."> -->
          <!-- <h1>Admin</h1> -->

        </a>
      </div>
      <div class="navbar-inner">
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
          <!-- Nav items -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <!-- <nuxt-link  class="nav-link active" :to="{name: 'admin-dashboard'}" > -->
              <nuxt-link  class="nav-link active" to="/admin/dashboard" >
                <i class="ni ni-tv-2 text-primary"></i>

                <span class="nav-link-text">لوحة القيادة</span>
              </nuxt-link>
              </li>

              <!-- <li  class="nav-item"> -->
              <li v-if="isAdmin" class="nav-item">
              <nuxt-link class="nav-link" to="/admin/users">
                <!-- <i class="ni ni-circle-08 text-default"></i> -->
                <i class="fa fa-users text-default" aria-hidden="true"></i>
                <span class="nav-link-text ">المستخدمين</span>
              </nuxt-link>
            </li>

            <li class="nav-item">
              <!-- <nuxt-link  class="nav-link" :to="{name: 'admin-posts'}" > -->
              <nuxt-link  class="nav-link" to="/admin/posts" >
                <i class="ni ni-single-copy-04 text-orange"></i>
                <span class="nav-link-text">المقالات</span>
              </nuxt-link>
            </li>

            <li class="nav-item">
              <nuxt-link  class="nav-link" to="/admin/categories">
              <!-- <nuxt-link  class="nav-link" :to="{name: 'admin-categories'}"> -->
                <i class="ni ni-archive-2 text-yellow"></i>
                <span class="nav-link-text">الاقسام</span>
              </nuxt-link>
            </li>


            <!-- <li class="nav-item"> -->
            <li v-if="isAdmin" class="nav-item">
              <nuxt-link class="nav-link" to="/admin/posts/trashed">
                <!-- <i class="ni ni-tag text-primary"></i> -->
                <i class="fa fa-trash text-darker" aria-hidden="true"></i>
                <span class="nav-link-text">المقالات محذوفة</span>
              </nuxt-link>
            </li>


            <!-- <li  class="nav-item"> -->
            <li v-if="isAdmin" class="nav-item">

              <nuxt-link class="nav-link" to="/admin/settings">
                <i class="ni ni-settings-gear-65 text-info"></i>
                <span class="nav-link-text">اعدادات</span>
              </nuxt-link>
            </li>

          </ul>



        </div>
      </div>
    </div>
  </nav>
  <!-- Main content -->
  <div class="main-content" id="panel">
    <!-- Topnav -->
    <nav class="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Search form -->
          <form class="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main">
            <div class="form-group mb-0">
              <div class="input-group input-group-alternative input-group-merge">
                <div class="input-group-prepend">
                  <span class="input-group-text"><span class="icon fa fa-search"></span></span>

                </div>
                <input class="form-control" placeholder="Search" type="text">
              </div>
            </div>
            <button type="button" class="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </form>
          <!-- Navbar links -->
          <ul class="navbar-nav align-items-center  ml-md-auto ">
             <!-- شعارات -->
            <!-- <li class="nav-item d-xl-none"> -->
              <!-- Sidenav toggler -->
              <!-- <div class="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
                <div class="sidenav-toggler-inner">
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                </div>
              </div>
            </li>
            <li class="nav-item d-sm-none">
              <a class="nav-link" href="#" data-action="search-show" data-target="#navbar-search-main">
                <i class="ni ni-zoom-split-in"></i>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ni ni-bell-55"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-xl  dropdown-menu-right  py-0 overflow-hidden"> -->
                <!-- Dropdown header -->
                <!-- <div class="px-3 py-3">
                  <h6 class="text-sm text-muted m-0">You have <strong class="text-primary">13</strong> notifications.</h6>
                </div> -->
                <!-- List group -->
                <!-- <div class="list-group list-group-flush">
                  <a href="#!" class="list-group-item list-group-item-action">
                    <div class="row align-items-center">
                      <div class="col-auto"> -->
                        <!-- Avatar -->
                        <!-- <img alt="Image placeholder" src="/assets/img/theme/team-1.jpg" class="avatar rounded-circle">
                      </div>
                      <div class="col ml--2">
                        <div class="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 class="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div class="text-right text-muted">
                            <small>2 hrs ago</small>
                          </div>
                        </div>
                        <p class="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                      </div>
                    </div>
                  </a>
                  <a href="#!" class="list-group-item list-group-item-action">
                    <div class="row align-items-center">
                      <div class="col-auto"> -->
                        <!-- Avatar -->
                        <!-- <img alt="Image placeholder" src="/assets/img/theme/team-2.jpg" class="avatar rounded-circle">
                      </div>
                      <div class="col ml--2">
                        <div class="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 class="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div class="text-right text-muted">
                            <small>3 hrs ago</small>
                          </div>
                        </div>
                        <p class="text-sm mb-0">A new issue has been reported for Argon.</p>
                      </div>
                    </div>
                  </a>
                  <a href="#!" class="list-group-item list-group-item-action">
                    <div class="row align-items-center">
                      <div class="col-auto"> -->
                        <!-- Avatar -->
                        <!-- <img alt="Image placeholder" src="/assets/img/theme/team-3.jpg" class="avatar rounded-circle">
                      </div>
                      <div class="col ml--2">
                        <div class="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 class="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div class="text-right text-muted">
                            <small>5 hrs ago</small>
                          </div>
                        </div>
                        <p class="text-sm mb-0">Your posts have been liked a lot.</p>
                      </div>
                    </div>
                  </a>
                  <a href="#!" class="list-group-item list-group-item-action">
                    <div class="row align-items-center">
                      <div class="col-auto"> -->
                        <!-- Avatar -->
                        <!-- <img alt="Image placeholder" src="/assets/img/theme/team-4.jpg" class="avatar rounded-circle">
                      </div>
                      <div class="col ml--2">
                        <div class="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 class="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div class="text-right text-muted">
                            <small>2 hrs ago</small>
                          </div>
                        </div>
                        <p class="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                      </div>
                    </div>
                  </a>
                  <a href="#!" class="list-group-item list-group-item-action">
                    <div class="row align-items-center">
                      <div class="col-auto"> -->
                        <!-- Avatar -->
                        <!-- <img alt="Image placeholder" src="/assets/img/theme/team-5.jpg" class="avatar rounded-circle">
                      </div>
                      <div class="col ml--2">
                        <div class="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 class="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div class="text-right text-muted">
                            <small>3 hrs ago</small>
                          </div>
                        </div>
                        <p class="text-sm mb-0">A new issue has been reported for Argon.</p>
                      </div>
                    </div>
                  </a>
                </div> -->
                <!-- View all -->
                <!-- <a href="#!" class="dropdown-item text-center text-primary font-weight-bold py-3">View all</a>
              </div>
            </li> -->
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ni ni-ungroup"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default  dropdown-menu-right ">
                <div class="row shortcuts px-4">
                  <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-red">
                      <i class="ni ni-calendar-grid-58"></i>
                    </span>
                    <small>Calendar (قريبا)</small>
                  </a>
                  <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-orange">
                      <i class="ni ni-email-83"></i>
                    </span>
                    <small>Email (قريبا)</small>
                  </a>
                  <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-info">
                      <i class="ni ni-credit-card"></i>
                    </span>
                    <small>Payments (قريبا)</small>
                  </a>
                  <a href="#!" class="col-4 shortcut-item">
                    <span class="shortcut-media avatar rounded-circle bg-gradient-green">
                      <i class="ni ni-books"></i>
                    </span>
                    <small>تعليمات</small>
                  </a>

                </div>
              </div>
            </li>
          </ul>
          <!-- <ul  class="navbar-nav align-items-center  ml-auto ml-md-0 "> -->
          <ul v-if="this.$auth.loggedIn" class="navbar-nav align-items-center  ml-auto ml-md-0 ">
            <li class="nav-item dropdown">
              <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="media align-items-center">
                  <span class="avatar avatar-sm rounded-circle">
                    <!-- <img src="/images/admin.jpg" alt="Image placeholder"> -->
                    <img :src="getProfilePhoto()" alt="Image placeholder">
                  </span>
                  <div  class="media-body  ml-2  d-none d-lg-block">
                    <span class="mb-0 text-sm  font-weight-bold">{{user.name}}</span>
                    <!-- <span class="mb-0 text-sm  font-weight-bold">M.Ataa</span> -->

                    <!-- <span class="mb-0 text-sm  font-weight-bold">{{user.type}}</span> -->

                  </div>
                </div>
              </a>
              <div class="dropdown-menu  dropdown-menu-right ">
                <div class="dropdown-header noti-title">
                  <h6 class="text-overflow m-0">مرحبا بك!</h6>
                </div>
                <!-- v-if="user.type === admin" -->
                <nuxt-link  to="/admin/profile" class="dropdown-item">
                  <i class="ni ni-single-02"></i>
                  <span>حسابي</span>
                </nuxt-link>
                <nuxt-link :to="{name:'admin-settings'}" class="dropdown-item">
                  <i class="ni ni-settings-gear-65"></i>
                  <span>عدادات</span>
                </nuxt-link>
                <!-- <a href="#!" class="dropdown-item">
                  <i class="ni ni-calendar-grid-58"></i>
                  <span>Activity</span>
                </a> -->

                <div class="dropdown-divider"></div>
                <button @click="logout" class="dropdown-item">
                  <i class="ni ni-user-run"></i>
                  <span>تسجيل خروج</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

   <Nuxt />
    <!-- Page content -->
  </div>

  </div>
</template>


<script>
export default {

data() {
  return {
    user:{},
    type:""


  }
},
created(){
      // this.updateToken()
      this.GetUser();

  },

// filters:{
// truncate (value, limit) {
//   if (value.length > limit) {
//       value = value.substring(0, (limit - 3)) + '...';
//   }
//   return value
// },

// },


// fetch({ $axios, store }) {
//     return $axios.$post("http://127.0.0.1:8000/api/auth/profile").then(res => {
//       // store.commit("updatePosts", res);
//        this.user = res;

//     });
//   },


  methods:{
// updateToken(){
//       // console.log(this.$store.getters.isLogged)

//      if ( this.isLogged) {
//       //  alert()
//          let token =JSON.parse(localStorage.getItem('userToken'));
//        this.$store.commit('setUserToken',token)
//      }

//      },

GetUser() {
// this.$axios.defaults.headers.common.Authorization = `Bearer ${this.$store.state.userToken}`

          // let formData = new FormData();
            // formData.append('token',this.$store.state.userToken);

       this.$axios.get("http://127.0.0.1:8000/api/auth/profile")
        .then(({ data }) =>{
         this.user = data;
         this.type =data.type
        })

},


     getProfilePhoto(){
                let photo = "http://127.0.0.1:8000/images/admin.png"
                // let photo = (this.type === 'admin') ? "http://127.0.0.1:8000/images/admin.png" : "http://127.0.0.1:8000/images/admin2.png" ;
                return photo;
            },

     async logout() {
      await this.$auth.logout();
      this.$axios.post('http://127.0.0.1:8000/api/auth/logout')
    },
    //    user() {
    //      if (this.isLogged) {
    //       return this.$store.getters.get_user;

    //      }
    // }

  },

   computed:{

      isAdmin(){
          return this.$auth.user.type === 'admin'
      },



  }
}
</script>
