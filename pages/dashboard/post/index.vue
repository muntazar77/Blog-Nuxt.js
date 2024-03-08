<template>
  <div>
     <!-- Header -->
    <!-- Header -->
<div class="header bg-primary pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7 text-left">
              <h6 class="h2 text-white d-inline-block mb-0">المقالات</h6>
              <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li class="breadcrumb-item"><nuxt-link to="/dashboard"> <i class="fa fa-home" aria-hidden="true"></i></nuxt-link></li>
                  <li class="breadcrumb-item"><nuxt-link to="/posts">المقالات</nuxt-link></li>
                </ol>
              </nav>
            </div>
            <div class="col-lg-6 col-5 text-right">
              <nuxt-link :to="{name: 'admin-post-create'}" class="btn btn-lg btn-neutral"> مقالة جديدة</nuxt-link>
              <!-- <a href="#" class="btn btn-lg btn-neutral">Filters</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Page content -->


<div class="container-fluid mt--6">
      <div class="row">
        <div class="col">
          <div class="card">
            <!-- Card header -->
            <div class="card-header border-0">
              <h3 class="mb-0">جدول المقالات</h3>
            </div>
            <!-- Light table -->
            <div class="table-responsive">
              <table v-if="posts.data !=''" class="table align-items-center table-flush">
               <thead class="thead-light">
                  <tr>
                    <th scope="col" class="sort" data-sort="name">Id</th>
                    <th scope="col" class="sort" data-sort="budget">العنوان</th>
                    <th scope="col" class="sort" data-sort="budget">المتوى</th>
                    <th scope="col" class="sort" data-sort="completion"> تاريخ الانشاء</th>
                    <th scope="col" class="sort" data-sort="completion">مميز </th>

                    <th scope="col" class="sort" data-sort="status">صورة</th>

                    <th scope="col" class="sort" data-sort="completion">عمليات</th>

                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody class="list">

                  <tr v-for="post in posts.data" :key="post.id">
                    <th scope="row">{{post.id}}</th>
                    <td>{{post.title |truncate(40)}}</td>
                    <td>{{post.content |truncate(40)}}</td>
                     <td>{{post.created_at | myDate}}</td>
                     <td>{{post.featured }}</td>
                 <td><img :src="'http://127.0.0.1:8000/images/posts/'+post.image"  width="120" height="70"></td>


                   <td>
                      <!-- <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal" @click="editCtaegory(category)"> <i class="fa fa-edit blue"></i></button> -->
                       <nuxt-link :to="{
                        name: 'admin-posts-edit',
                        params: {
                            id: post.id
                        }
                    }" class="btn btn-primary btn-sm"><i class="fa fa-edit blue"></i></nuxt-link>
                      <a href="#" class="btn btn-youtube btn-sm" @click="deletePost(post.id)">
                        <i class="fa fa-trash red"></i>
                      </a>
                    </td>





                  </tr>

                </tbody>
              </table>

               <div v-else class="container">

                      <h1 style=" font-size: xxx-large;" > لا يوجد مقالات </h1>

                  </div>
            </div>


            <!-- Card footer -->

<div class="card-footer py-4">
              <nav aria-label="...">

             <pagination :data="posts" @pagination-change-page="getResults">


               <span slot="sr-only">&lt; سابق</span>
	<span slot="sr-only">التالي &gt;</span>
             </pagination>

              </nav>
            </div>


          </div>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
import Swal from "sweetalert2";
// import moment from "moment";
import pagination from "laravel-vue-pagination";

export default {
   layout:'admin-layout',
 middleware: 'auth',


    data() {
        return {
          posts:{}
        }
  },
  components:{
    pagination
     },
  // asyncData({ $axios  },page) {
  //    if (typeof page === 'undefined') {
  //                   page = 1;
  //               }
  //   return $axios.$get('http://127.0.0.1:8000/api/posts/all?page=' + page)
  //     .then(res => {
  //       return {
  //         posts :res.data.posts
  //       }
  //     });
  // },
mounted() {
		// Fetch initial results
		this.getResults();
	},

methods: {

 getResults(page) {
                if (typeof page === 'undefined') {
                    page = 1;
                }
                 this.$axios.get('/posts/all?page=' + page)
                   .then(data => {
                        this.posts = data.data.posts;
                    });
                // this.$axios.get("http://127.0.0.1:8000/api/posts/all").then(({ data }) => (this.posts = data.posts));
            },


 deletePost(id) {
      Swal.fire({
        title: "هل أنت واثق ?",
        text: "! لن تتمكن من التراجع عن هذا ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "نعم ، احذفها ",
      }).then((result) => {
        if (result.value) {
          this.$axios.delete("/post/" + id, this.posts)
            .then(() => {
              Swal.fire("Deleted!", "تم حذف ملفك.", "success");
            })
            .catch(() => {});
        }
      });
    },


},


}
</script>
