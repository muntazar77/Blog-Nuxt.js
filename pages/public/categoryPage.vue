<template>
  <div>
<MastPage>

<template v-slot:content3>

         <div class="row mb-4" style="text-align: initial;">
          <div class="col-md-6">
 <br>
            <h1 class="mb-4"> قسم : {{ nameCategory}}</h1>
          </div>
        </div>
</template>
<template>
 <div>
            <div class="row mb-5 mt-5">

              <div class="col-md-12">

                <div class="post-entry-horzontal" v-for="pc in posts.data" :key="pc.id">
                  <router-link :to="{ name: 'singl.post',
                        params: {
                            id: pc.slug} }">
                    <div class="image" data-animate-effect="fadeIn" :style="{'background-image': `url(${'http://127.0.0.1:8000/images/posts/'+pc.image})`}"></div>
                    <span class="text">
                      <div class="post-meta">
                        <span class="category">{{pc.category.name}}</span>
                        <span class="mr-2"> {{pc.created_at}}</span> &bullet;
                         <span class="ml-2"><i class="fa fa-eye" aria-hidden="true"></i>{{pc.visits_count}}</span>

                      </div>
                      <h2>{{pc.title}}</h2>
                    </span>
                  </router-link>
                </div>
                <!-- END post -->


                <!-- END post -->


              </div>
            </div>

            <div class="row">
             <div class="col-md-12 text-center">
              <nav aria-label="Page navigation" class="text-center">

             <pagination :data="posts" @pagination-change-page="category">


               <span class="page-link" > &lt; Previous</span>
	              <span class="page-link">Next &gt;</span>
             </pagination>

              </nav>
            </div>
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

  data() {
      return {
          posts:{},
          nameCategory:'',
          aboutCategory:''
      }
  },

head () {
    return {
      title: "قسم "+ this.nameCategory,
      meta: [
        {
           hid: 'description',
         name: 'description',
         content:this.aboutCategory ,


        }
      ]
    }
  },
  components: {
    MastPage,
    pagination
  },
  created() {
      this.category();
      this.nCategory();
  },

methods: {
      category(page) {

            if (typeof page === 'undefined') {
                    page = 1;
                }

                 this.$axios.get('/category/posts/'+this.$route.params.id + '?page='+page)
                   .then(data => {
                        this.posts = data.data;
                        // this.nameCategory = data.data.data.category.name;

                        // this.nameCategory = data.data.nameCategory;

                    });
            },


              nCategory() {

                 this.$axios.get('/category/name/'+this.$route.params.id)
                   .then(data => {

                        this.nameCategory = data.data.category.name;
                        this.aboutCategory = data.data.category.about;

                    });
            },
},


}
</script>
