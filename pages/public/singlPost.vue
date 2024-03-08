<template>
  <div>
<MastPage>

    <!-- content -->
<div>
            <h1 class="mb-4">{{post.title}}</h1>
            <div class="post-meta" style="text-align: initial;">
                        <span class="category">{{post.category.name}}</span>
                        <span class="mr-2">{{post.created_at}} </span> &bullet;
                       <span class="ml-2"><i class="fa fa-eye" aria-hidden="true"></i>{{post.visits_count}}</span>
                      </div>
            <div class="post-content-body">
            <div class="row mb-5">
              <div class="col-md-12 mb-4 ">
                <img :src="'http://127.0.0.1:8000/images/posts/'+post.image" alt="Image placeholder" class="img-fluid">
                <br>
                <br>

                <div v-html="post.content">
            </div>
              </div>
            </div>

            </div>
          </div>
        <!-- End content -->


        <!--  منشور له صلة -->
         <template v-slot:related>
             <section class="py-5">
      <div v-if="related!=undefined && related != ''" class="container">
        <div class="row">
          <div  class="col-md-12">
            <h2 class="mb-3 " style="text-align: initial;font-size: revert;"> منشور له صلة</h2>
          </div>
        </div>
        <div class="row">

          <div class="col-md-6 col-lg-4" v-for="r in related" :key="r.id">
            <nuxt-link   :to="{ name: 'singl.post',
                        params: {
                            id: r.slug}
                            }"
                             class="a-block d-flex align-items-center height-md" :style="{'background-image': `url(${'http://127.0.0.1:8000/images/posts/'+r.image})`}">
              <div class="text">
                <div class="post-meta">
                  <span class="category">{{r.category.name}}</span>
                  <span class="mr-2">{{r.created_at}} </span> &bullet;
                  <!-- <span class="ml-2"><span class="fa fa-comments"></span> 3</span> -->
                   <span class="ml-2"><i class="fa fa-eye" aria-hidden="true"></i>{{r.visits_count}}</span>
                </div>
                <h3>{{r.title}}</h3>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
          </template>
          <!--End Post -->

</MastPage>
  </div>
</template>
<script>
import MastPage from "@/components/mastPublic.vue";
export default {

async asyncData({$axios,params}) {
  // const post = await $axios.$get(`https://my-api/posts/${params.id}`)
    const data = await $axios.$get(`/posts/singl/${params.id}`)
    const rel = await $axios.$get(`/posts/related/${params.id}`)
    return {
      post: data.data,
      related :rel.data
    }
},

    data() {
        return {
            post:{},
            related:{},



        }
    },


  components: {
    MastPage,
  },
head () {
    return {
      title: this.post.title,
      meta: [
        {
           hid: 'description',
         name: 'description',
         content: this.post.content,


        }
      ]
    }
  }
}
</script>
