<template>
  <div>
         <!-- Header -->
<div class="header bg-primary pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7 text-left">
              <h6 class="h2 text-white d-inline-block mb-0">المقالات</h6>
              <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li class="breadcrumb-item"><router-link to="/dashboard"><i class="fa fa-home" aria-hidden="true"></i></router-link></li>
                  <li class="breadcrumb-item"><router-link to="/posts">Posts</router-link></li>
                  <li class="breadcrumb-item"><router-link to="/posts">Trashed</router-link></li>

                </ol>
              </nav>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Page content -->


<div class="container-fluid mt--6 ">
      <div class="row">
        <div class="col">
          <div class="card bg-default shadow">
            <!-- Card header -->
            <div class="card-header bg-transparent border-0 ">
              <h3 class="text-white mb-0">المقالات المحذوفة</h3>
            </div>
            <!-- Light table -->
            <div class="table-responsive ">
              <table v-if="posts !=''" class="table align-items-center table-dark table-flush">
               <thead class="thead-dark">
                  <tr>
                     <th scope="col" class="sort" data-sort="name">Id</th>
                    <th scope="col" class="sort" data-sort="budget">العنوان</th>
                    <th scope="col" class="sort" data-sort="budget">المتوى</th>
                    <th scope="col" class="sort" data-sort="completion"> تاريخ الانشاء</th>
                    <th scope="col" class="sort" data-sort="status">صورة</th>
                    <th scope="col" class="sort" data-sort="completion">عمليات</th>

                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody class="list">

                  <tr v-for="post in posts" :key="post.id">
                    <th scope="row">{{post.id}}</th>
                    <td>{{post.title |truncate(40)}}</td>
                    <td>{{post.content |truncate(40)}}</td>
                     <td>{{post.created_at | myDate}}</td>
                 <td><img :src="'http://127.0.0.1:8000/images/posts/'+post.image"  width="120" height="70"></td>


                   <td>
                      <!-- <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal" @click="editCtaegory(category)"> <i class="fa fa-edit blue"></i></button> -->
                       <button @click="restore(post.id)" class="btn btn-primary btn-sm">
                    <i class="fa fa-window-restore" aria-hidden="true"></i>

                       </button>

                      <a href="#" class="btn btn-youtube btn-sm" @click="deletePost(post.id)">
                        <i class="fa fa-trash red"></i>


                      </a>
                    </td>

                  </tr>

                </tbody>
              </table>

               <div v-else class="container">

                      <h1 style=" font-size: xxx-large;" >لاتوجد مقالات </h1>

                  </div>
            </div>
            <!-- Card footer -->


          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {


}
</script>


<script>
import Swal from "sweetalert2";
export default {
   layout:'admin-layout',
  middleware: 'auth',
  data() {
    return {
      posts:{}
    }
  },
     created () {
    this.$axios.get("http://127.0.0.1:8000/api/trashed-posts").then(({ data }) => (this.posts = data.posts));
//       this.getResults();
},



methods: {
        restore(id){
      this.$axios.get("/trashed-posts/" + id,)
                  .then((res) => {
            //   this.$toast.fire({
            //   icon: "success",
            //   title: "Restore successfully",
            // });

     if (res.data.status == false) {
            //  this.errors = res.data.msg
            console.log(res.data.msg);
            this.$toast.fire({
              icon: "error",
              title: res.data.msg,
            });
          } else if (res.data.status === true) {
             this.$toast.fire({
              icon: "success",
              title: "تم الاسترجاع بنجاح ",
            });
          }
            })
            .catch(() => {});

},
 deletePost(id) {
      Swal.fire({
        title: "هل انت متاكد ؟",
        text: "لن تتمكن من التراجع عن هذا!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "نعم ، احذفها!",
      }).then((result) => {
        if (result.value) {
          this.$axios.delete("/api/post/" + id, this.posts)
            .then(() => {
              Swal.fire("Deleted!", " . تم حذف ملفك", "success");
            })
            .catch(() => {});
        }
      });
    },


},

}
</script>
