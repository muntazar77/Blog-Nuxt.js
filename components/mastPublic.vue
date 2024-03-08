<template>
    <div>
    <header role="banner">
      <div class="top-bar">
        <div class="container">
          <div class="row">
            <div class="col-9 social">
              تواصل الاجتماعي
              <a :href="settings.twitter" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
              <a :href="settings.facebook" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
              <a :href="settings.instegrm" target="_blank"><span class="fa fa-instagram"></span></a>

            </div>
            <!-- بحث -->
            <!-- <div class="col-3 search-top">
              <form action="#" class="search-top-form">
                <span class="icon fa fa-search"></span>
                <input type="text" class="form-control" id="s"  placeholder=" اكتب كلمة أساسية في بحث..."  v-model="keywords2">
        <ul v-if="results.length > 0 && keywords2 != '' ">
           <li class="nav-item dropdown" v-for="result in results"  :key="result.id" style="
    background-color: blanchedalmond;
">

             <router-link onclick="location.reload();" :to="{ name: 'singl.post',
                        params: {
                            id: result.slug} }" > {{result.title |truncate(33)}}
               </router-link>

               </li>
        </ul>
              </form>
            </div> -->
          </div>
        </div>
      </div>
      <!--  يا شرك في كل  بقاع الارض كل هوى  -->
      <!-- املهم كل ثقب الاسود -->
      <div class="container logo-wrap">
        <div class="row pt-5">
          <div class="col-12 text-center">
            <a class="absolute-toggle d-block d-md-none" data-toggle="collapse" href="#navbarMenu" role="button" aria-expanded="false" aria-controls="navbarMenu"><span class="burger-lines"></span></a>
            <h2 class="site-logo"><router-link :to="{name:'Home'}">
</router-link></h2>
          <img src="/images/77.png" class="navbar-brand-img" alt="...">

          </div>
        </div>
      </div>

      <nav class="navbar navbar-expand-md  navbar-light bg-light">
        <div class="container">

          <div class="collapse navbar-collapse" id="navbarMenu">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <router-link class="nav-link active" :to="{name:'Home'}" style="
    color: #ffffff;
"> الرئيسية</router-link>
              </li>

             <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'About'}" style="
    color: #ffffff;
"> حول </router-link>
              </li>
              <!-- <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'Contact'}">اتصل بنا</router-link>
              </li> -->


               <li class="nav-item" v-for="h in categories.categoryHed" :key="h.id">
                <router-link   class="nav-link" :to="{ name: 'category.page',
                        params: {
                            id: h.id} }" style="  color: #ffffff;">{{h.name}}</router-link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </header>
     <slot name="content1"></slot>

 <section class="site-section py-sm">
              <div class="container">
        <!-- ##### slod######### -->
             <slot name="content3"></slot>
             <br>
          <div class="row blog-entries">
            <div class="col-md-12 col-lg-8 main-content">
          <!-- END main-content -->


                <slot />
</div>

        <div class="col-md-12 col-lg-4 sidebar">

          <!-- سيرج البحث هنا -->
            <div class="sidebar-box search-form-wrap">
              <form action="#" class="search-form">
                <div class="form-group">
                  <span class="icon fa fa-search"></span>
                  <input type="text" class="form-control" id="s"  placeholder=" اكتب كلمة أساسية في بحث..."  v-model="keywords">

               <ul v-if="results.length > 0 && keywords != '' " style="
    background-color: blanchedalmond;
">
                    <li class="nav-item dropdown" v-for="result in results"  :key="result.id" >

                      <router-link  :to="{ name: 'singl.post',
                                    params: {
                                        id: result.slug} }" > {{result.title |truncate(33)}}
                          </router-link>

                      </li>
        </ul>
                </div>
              </form>
            </div>


            <!-- END sidebar-box -->
            <!-- صندوق التعريف  -->
            <!-- <div class="sidebar-box">
              <div class="bio text-center">
                <img src="/assets/images/person_1.jpg" alt="Image Placeholder" class="img-fluid">
                <div class="bio-body">
                  <h2>Meagan Smith</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facilis sunt repellendus excepturi beatae porro debitis voluptate nulla quo veniam fuga sit molestias minus.</p>
                  <p><a href="#" class="btn btn-primary btn-sm">Read my bio</a></p>
                  <p class="social">
                    <a href="#" class="p-2"><span class="fa fa-facebook"></span></a>
                    <a href="#" class="p-2"><span class="fa fa-twitter"></span></a>
                    <a href="#" class="p-2"><span class="fa fa-instagram"></span></a>
                    <a href="#" class="p-2"><span class="fa fa-youtube-play"></span></a>
                  </p>
                </div>
              </div>
            </div> -->
            <!-- END sidebar-box -->
            <!-- color: rgb(206, 154, 99); -->
            <div class="sidebar-box">
              <h3 class="heading" style="font-size: x-large;">الاكثر مشاهدة</h3>
              <div class="post-entry-sidebar">
                <ul>

                  <li   v-for="m in postMostView.data" :key="m.id">
                    <router-link  :to="{ name: 'singl.post',
                        params: {
                            id: m.slug} }">
                      <img :src="'http://127.0.0.1:8000/images/posts/'+ m.image" alt="Image placeholder" class="mr-4">
                      <div class="text">
                        <h4>{{m.title |truncate(50)}}</h4>
                        <div class="post-meta">
                          <span class="mr-2">{{m.created_at}}</span> &bullet;
                           <span class="ml-2"><i class="fa fa-eye" aria-hidden="true"></i>{{m.visits_count}}</span>
                        </div>
                      </div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <!-- END sidebar-box -->

             <div class="sidebar-box">
              <h1 class="heading" style="
    font-size: x-large;
"> الاقسام</h1>
              <ul class="categories" v-for="category in categories.categories" :key="category.id">
                <li><router-link onclick="location.reload();" :to="{ name: 'category.page',
                        params: {
                            id: category.id} }">{{category.name}}</router-link></li>

              </ul>
            </div>
            <!-- END sidebar-box -->

            <!-- <div class="sidebar-box">
              <h3 class="heading">Tags</h3>
              <ul class="tags">
                <li><a href="#">Travel</a></li>
                <li><a href="#">Adventure</a></li>
                <li><a href="#">Food</a></li>
                <li><a href="#">Lifestyle</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Freelancing</a></li>
                <li><a href="#">Travel</a></li>
                <li><a href="#">Adventure</a></li>
                <li><a href="#">Food</a></li>
                <li><a href="#">Lifestyle</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Freelancing</a></li>
              </ul>
            </div> -->
          </div>


        </div>
      </div>
    </section>


        <!-- slot 3 -->
     <slot name="related"></slot>
        <!-- End slot 3 -->


     <footer class="site-footer" style="text-align: initial; padding-bottom: 30px;">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-4">
            <h3>وصف الموقع</h3>
            <p>
              <img src="/images/mo.jpg" alt="Image placeholder" class="img-fluid">
            </p>

            <p>{{settings.addres}}</p>
          </div>
          <div class="col-md-6 ml-auto">
            <div class="row">

                 <div class="col-md-4">

                <div class="mb-5">
                  <h3> تواصل الاجتماعي</h3>
                  <ul class="list-unstyled">
                 <li><a :href="settings.twitter" target="_blank"><span class="fa fa-twitter"></span> Twitter</a></li>
                 <li><a :href="settings.facebook" target="_blank"><span class="fa fa-facebook"></span> Facebook</a></li>
                 <li><a :href="settings.instegrm" target="_blank"><span class="fa fa-instagram"></span> Instagram</a></li>
                    <!-- <li><router-link to="settings"><span class="fa fa-youtube-play"></span> Youtube</router-link></li> -->
                  </ul>
                </div>


              </div>

              <div class="col-md-1"></div>

              <div class="col-md-4">

                <div class="mb-5">
                  <h3>روابط سريعة</h3>
                  <ul class="list-unstyled">
                      <li class="nav-item">
                <router-link  :to="{name:'Home'}" > الرئيسية </router-link>
                            </li>

             <li class="nav-item">
                <router-link  :to="{name: 'About'}"> حول </router-link>
                            </li>

                     <li class="nav-item" v-for="h in categories.categoryHed" :key="h.id">
                <router-link    :to="{ name: 'category.page',
                        params: {
                            id: h.id} }" style="  color: #ffffff;">{{h.name}}</router-link>
              </li>
                  </ul>
                </div>


              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12  container " style=" margin-left: 30%;
">
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
<!-- Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a> -->
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
 {{s|myDateDay}}  جميع الحقوق محفوظة ©  مهد الحضارات

          </div>
        </div>
      </div>
    </footer>
    </div>
</template>



<script>
export default {
layouts:false,

// async asyncData({$axios}) {
//   const setting = await $axios.$get('http://127.0.0.1:8000/api/settings')
//     const mv = await $axios.$get('http://127.0.0.1:8000/api/posts/mostview')
//     const category = await $axios.$get('http://127.0.0.1:8000/api/categoryAll')
//     return {
//       postMostView: mv.data,
//       categories :category,
//       categoryHed ,
//       settings
//     }
// },
async fetch() {
    this.categories = await fetch('http://127.0.0.1:8000/api/categoryAll').then(res =>
      res.json()
    ),

     this.postMostView = await fetch('http://127.0.0.1:8000/api/posts/mostview').then(res =>
      res.json()
      )

  },


  data() {
    return {
      s:'',
      postMostView:{},
      categories:{},
      // categoryHed:{},
       keywords: null,
        results: [],
        settings:{},
        // now: new Date().getUTCSeconds()
      // posts:{},
      //    searchpost:'',
      //           issearching : false
    }
  },

mounted() {
  // this.getResul();
  // this.category();
  this.GetSettings();
  // this.dataNow();

},
      watch: {
        keywords() {
            this.fetch();
        },

    },

  methods: {

   fetch() {
         this.$axios.get('http://127.0.0.1:8000/api/res-search', { params: { keywords: this.keywords } })
                .then(response => this.results = response.data)
                .catch(error => {
                  console.log(error)
                });
        },




    // getResul() {
    //              this.$axios.get('http://127.0.0.1:8000/api/posts/mostview')
    //                .then(data => {
    //                     this.postMostView = data.data;
    //                 });
    //         },

    //          category() {
    //              this.$axios.get('http://127.0.0.1:8000/api/categoryAll')
    //                .then(data => {
    //                     this.categories = data.data.categories;
    //                     this.categoryHed =data.data.categoryHed
    //                 });
    //         },

               GetSettings() {
              this.$axios
                .get("http://127.0.0.1:8000/api/settings")
                .then(({ data }) =>{

          // this.posts = data.posts
         this.settings = data.settings ;
        });
    },
  },
}
</script>


