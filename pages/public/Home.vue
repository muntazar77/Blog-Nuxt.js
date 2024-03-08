<template>
  <div>
<MastPage>
<template v-slot:content1>
  <div>
  <section class="site-section pt-5" style="
    padding-bottom: 30px;
">
    <div class="container">
    <div class="row">
          <div class="col-md-12">
              <div id="carouselExampleCaptions" class="carousel slide home-slider" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>

                </ol>
                <div class="carousel-inner" v-if="featured.f1 != null"  >
                  <div class="carousel-item active" >
                              <nuxt-link :to="{ name: 'singl.post',
                        params: {
                            id: featured.f1.slug} }" class="a-block d-flex align-items-center height-lg" :style="{'background-image': `url(${'http://127.0.0.1:8000/images/posts/'+featured.f1.image})`}">
                                <div class="text half-to-full" style=" max-width: 50%;
                  max-height: 0px;
                  left: 20%;">
                                  <div class="post-meta" >
                                  <span class="mr-2">{{featured.f1.created_at | myDate}} </span> &bullet;
                                   <span class="ml-2"><i class="fa fa-eye" aria-hidden="true"></i>{{featured.f1.visits}}</span>
                                  </div>
                                  <h2 style="color: #fff;">{{featured.f1.title}}</h2>
                                  <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis, ut dicta eaque ipsa laudantium!</p> -->
                                </div>
                              </nuxt-link>
                  </div>
              <!-- End post -->

               <div class="carousel-item " v-if="featured.f2 != null " >
                              <nuxt-link :to="{ name: 'singl.post',
                        params: {
                            id: featured.f2.slug} }" class="a-block d-flex align-items-center height-lg" :style="{'background-image': `url(${'http://127.0.0.1:8000/images/posts/'+featured.f2.image})`}">
                                <div class="text half-to-full" style=" max-width: 50%;
                  max-height: 0px;
                  left: 20%;">
                                  <div class="post-meta" >
                                    <!-- <span class="category">{{fea.category.name}}</span> -->
                                    <span class="mr-2">{{featured.f2.created_at | myDate}} </span> &bullet;
                                   <span class="ml-2"><i class="fa fa-eye" aria-hidden="true"></i>{{featured.f2.visits}}</span>
                                  </div>
                                  <h2 style="color: #fff;">{{featured.f2.title}}</h2>
                                  <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis, ut dicta eaque ipsa laudantium!</p> -->
                                </div>
                              </nuxt-link>
                  </div>
              <!-- End post -->





          <div class="carousel-item " v-if="featured.f3 != null " >
                              <nuxt-link :to="{ name: 'singl.post',
                        params: {
                            id: featured.f3.slug} }" class="a-block d-flex align-items-center height-lg" :style="{'background-image': `url(${'http://127.0.0.1:8000/images/posts/'+featured.f3.image})`}">
                                <div class="text half-to-full" style=" max-width: 50%;
                  max-height: 0px;
                  left: 20%;">
                                  <div class="post-meta" >
                                    <!-- <span class="category">{{fea.category.name}}</span> -->
                                    <span class="mr-2">{{featured.f3.created_at | myDate}} </span> &bullet;
                                   <span class="ml-2"><i class="fa fa-eye" aria-hidden="true"></i>{{featured.f3.visits}}</span>
                                  </div>
                                  <h2 style="color: #fff;">{{featured.f3.title}}</h2>
                                  <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis, ut dicta eaque ipsa laudantium!</p> -->
                                </div>
                              </nuxt-link>
                  </div>
                 <!-- End post -->



                   <div class="carousel-item " v-if="featured.f4 != null"  >
                              <nuxt-link :to="{ name: 'singl.post',
                        params: {
                            id: featured.f4.slug} }" class="a-block d-flex align-items-center height-lg" :style="{'background-image': `url(${'http://127.0.0.1:8000/images/posts/'+featured.f4.image})`}">
                                <div class="text half-to-full" style=" max-width: 50%;
                  max-height: 0px;
                  left: 20%;">
                                  <div class="post-meta" >
                                    <!-- <span class="category">{{fea.category.name}}</span> -->
                                    <span class="mr-2">{{featured.f4.created_at | myDate}} </span> &bullet;
                                   <span class="ml-2"><i class="fa fa-eye" aria-hidden="true"></i>{{featured.f4.visits}}</span>
                                  </div>
                                  <h2 style="color: #fff;">{{featured.f4.title}}</h2>
                                  <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis, ut dicta eaque ipsa laudantium!</p> -->
                                </div>
                              </nuxt-link>
                  </div>

                 <!-- End post -->

                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>


          </div>
        </div>
<!-- End seidbar -->
<!--
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <a href="blog-single.html" class="a-block d-flex align-items-center height-md" style="background-image: url('/assets/images/img_2.jpg'); ">
              <div class="text">
                <div class="post-meta">
                  <span class="category">Lifestyle</span>
                  <span class="mr-2">March 15, 2018 </span> &bullet;
                  <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                </div>
                <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
              </div>
            </a>
          </div>
          <div class="col-md-6 col-lg-4">
            <a href="blog-single.html" class="a-block d-flex align-items-center height-md" style="background-image: url('/assets/images/img_3.jpg'); ">
              <div class="text">
                <div class="post-meta">
                  <span class="category">Travel</span>
                  <span class="mr-2">March 15, 2018 </span> &bullet;
                  <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                </div>
                <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
              </div>
            </a>
          </div>
          <div class="col-md-6 col-lg-4">
            <a href="blog-single.html" class="a-block d-flex align-items-center height-md" style="background-image: url('/assets/images/img_4.jpg'); ">
              <div class="text">
                <div class="post-meta">
                  <span class="category">Food</span>
                  <span class="mr-2">March 15, 2018 </span> &bullet;
                  <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                </div>
                <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
              </div>
            </a>
          </div>
        </div> -->
    </div>
</section>

  </div>


</template>




<template>
   <div class="row">
          <div class="col-md-6">
            <h1 class="mb-4" style="
    text-align: initial; font-size: xx-large;
">المقالات</h1>
          </div>
        </div>
            <div class="row">
              <div class="col-md-6"   v-for="post in posts.data" :key="post.id">
                <nuxt-link :to="{ name: 'singl.post',
                        params: {
                            id: post.slug} }" class="blog-entry" data-animate-effect="fadeIn">
                  <img :src="'http://127.0.0.1:8000/images/posts/'+post.image" alt="Image placeholder">
                  <div class="blog-content-body">
                    <div class="post-meta">
                      <span class="category">{{post.category.name}}</span>
                      <span class="mr-2">{{post.created_at}} </span> &bullet;
                      <span class="ml-2"><i class="fa fa-eye" aria-hidden="true"></i>{{post.visits_count}}</span>
                    </div>
                    <h2>{{post.title |truncate(75)}}</h2>
                  </div>
                </nuxt-link>
              </div>
            </div>


              <!-- pagination -->
              <div class="row">
                <div class="col-md-12 text-center" style=" height: 70px;
">
              <nav aria-label="Page navigation" class="text-center">

             <pagination :data="posts" @pagination-change-page="getResults">
               <span class="page-link" > &lt; Previous</span>
	              <span class="page-link">Next &gt;</span>
             </pagination>

              </nav>
            </div>
              </div>



<!-- <div class="posts">
      <div class="post-card" v-for="post in post1" :key="post.id">
        <div class="post-card-body">
          <h3>
            <nuxt-link :to="`/blog/${post.id}`">
              <span >
                {{ post.title }}
              </span>
            </nuxt-link>
          </h3>
          <p>{{ post.body }}</p>
        </div>
      </div>
    </div> -->


            <div class="row mb-5 mt-5">
              <div class="col-md-12">
                <h2 class="mb-4" style="
    text-align: initial; font-size: x-large;
"> احدث مقالات </h2>
              </div>

              <div class="col-md-12" v-for="b in newsPost.data" :key="b.id">

                <div class="post-entry-horzontal" >
                  <nuxt-link :to="{ name: 'singl.post',
                        params: {
                            id: b.slug} }">
                    <div class="image"  data-animate-effect="fadeIn" :style="{'background-image': `url(${'http://127.0.0.1:8000/images/posts/'+b.image})`}"></div>
                    <span class="text">
                      <div class="post-meta">
                        <span class="category">{{b.category.name}}</span>
                        <span class="mr-2">{{b.created_at}} </span> &bullet;
                   <span class="ml-2"><i class="fa fa-eye" aria-hidden="true"></i>{{b.visits_count}}</span>

                      </div>
                      <h2>{{b.title |truncate(75)}}</h2>
                    </span>
                  </nuxt-link>
                </div>
                <!-- END post -->


              </div>
            </div>




</template>


</MastPage>
  </div>
</template>
<script>
import MastPage from "@/components/mastPublic.vue";
import pagination from "laravel-vue-pagination";

export default {
  layouts:false,
  data() {
    return {
      posts:{},
      newsPost:{},
      featured:{}
    }
  },
 async asyncData({ $axios}) {

    const newsPost = await  $axios.$get("/posts/newsPost")
    const featured = await  $axios.$get("/posts/featured")

  return {
    newsPost,
    featured
  }
  },
  head() {
    return {
      title: "الصفحة الرئيسية",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'هذا الصفحة الرئيسية لموقع مهد الحضارات التي تحتوي على جميع المقالات التي تتحدث عن التاريخ العالم ,تاريخ العراق العظيم'
        }
      ]
    }
  },

  components: {
    MastPage,
    pagination
  },
  created() {
		// Fetch initial results
    this.getResults();
	},
  methods: {

//  newsPostt() {

//                  this.$axios.get('http://127.0.0.1:8000/api/posts/newsPost')
//                    .then(data => {
//                         this.newsPost = data.data;
//                     });
//             },


//  featuredPostt() {

//                  this.$axios.get('http://127.0.0.1:8000/api/posts/featured')
//                    .then(data => {
//                         this.featured = data.data;
//                     });
//             },


    getResults(page) {
                if (typeof page === 'undefined') {
                    page = 1;
                }
                 this.$axios.get('/post?page=' + page)
                   .then(data => {
                        this.posts = data.data;
                    });
                // this.$axios.get("http://127.0.0.1:8000/api/posts/all").then(({ data }) => (this.posts = data.posts));
            },
  },
}
</script>
