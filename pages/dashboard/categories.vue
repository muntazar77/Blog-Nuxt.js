<template>
  <div>

  <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 v-if="edit" class="modal-title" id="exampleModalLabel">تعديل القسم</h5>
            <h5 v-else class="modal-title" id="exampleModalLabel">قسم جديد</h5>

            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form enctype="multipart/form-data" name="formName">
              <div class="form-group">
                <label for="exampleFormControlInput1">اسم القسم </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name ..."
                  v-model="form.name"
                />
                <!-- <div style="color:red;" v-if="errors">{{  errors}}</div> -->
              </div>

              <div class="form-group">
                <label for="exampleFormControlTextarea1"> حول قسم</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  v-model="form.about"
                ></textarea>
              </div>

              <!-- <div class="form-group">
                <label for="exampleFormControlTextarea1"> Image Category</label>
                <input
                  type="file"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="image"
                  ref="image"
                  v-on:change="onImageChange"
                />
              </div> -->

              <!-- <span v-if="errors" class="alert alert-danger"> {{errors[0]}}</span> -->
            </form>
            <!-- End model -->
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal" >الغاء </button>
              <button v-if="edit" type="button" class="btn btn-primary" @click="editCategory1"> حفظ  </button>
            <button v-else  type="button" class="btn btn-primary" @click="createCategory"> انشاء  </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Header -->
    <!-- Header -->
    <div class="header bg-primary pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7 text-left">
              <h6 class="h2 text-white d-inline-block mb-0">الاقسام</h6>
              <nav
                aria-label="breadcrumb"
                class="d-none d-md-inline-block ml-md-4"
              >
                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li class="breadcrumb-item">
                    <a href="#"> <i class="fa fa-home" aria-hidden="true"></i></a>

                  </li>
                  <li class="breadcrumb-item"><a href="#">الاقسام</a></li>
                </ol>
              </nav>
            </div>
            <div class="col-lg-6 col-5 text-right">
              <!-- <a href="#" class="btn btn-lg btn-neutral">New</a> -->
              <!-- <a href="#" class="btn btn-sm btn-neutral">Filters</a> -->

              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-lg btn-neutral"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                  قسم جديد
              </button>
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
              <h3 class="mb-0">جدول الاقسام</h3>
            </div>
            <!-- Light table -->
            <div class="table-responsive">
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th scope="col" class="sort" data-sort="name">Id</th>
                    <th scope="col" class="sort" data-sort="budget">الاسم</th>
                    <!-- <th scope="col" class="sort" data-sort="status">
                      Registered At
                    </th> -->
                       <th scope="col">حول</th>
                        <!-- <th>imag</th> -->
                    <th scope="col" class="sort" data-sort="completion">
                      Modify
                    </th>

                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody class="list">
                  <tr
                    v-for="category in categories.data"
                    :key="category.id"
                  >
                    <th scope="row">{{ category.id }}</th>
                    <td>{{ category.name }}</td>
                    <!-- <td>{{ category.created_at | myDate }}</td> -->
                    <td>{{ category.about |truncate(40) }}</td>
                    <!-- <td><img :src="'http://127.0.0.1:8000/images/category/'+category.image"  width="120" height="70"></td> -->
                    <!-- <td><img :src="'/images/category/'+category.image"  width="120" height="75"></td> -->





                    <td>


                      <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal" @click="editCtaegory(category)"> <i class="fa fa-edit blue"></i></button>

                      <a href="#" class="btn btn-youtube btn-sm" @click="deleteCategory(category.id)">
                        <i class="fa fa-trash red"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>


            <!-- Card footer -->
            <!-- pagination -->
            <div class="card-footer py-4">
              <nav aria-label="...">

                 <pagination :data="categories" @pagination-change-page="getResults">
               <span slot="sr-only">&lt; Previous</span>
	<span slot="sr-only">Next &gt;</span>
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
import pagination from "laravel-vue-pagination";

// import axios from "axios"
import Swal from "sweetalert2";
export default {
  layout:'admin-layout',
  middleware: 'auth',
  data() {
    return {
      categories: {},
      // errors: [],
         edit:false,
    form: {
        id: "",
        name: "",
        about: "",
        // image: "",
      },
    };
  },
 components:{
    pagination
     },
  mounted() {

  // this.$axios.get("http://127.0.0.1:8000/api/category")
  //     .then(({ data }) => (this.categories = data));
  this.getResults();
  },

  methods: {


    getResults(page) {
                if (typeof page === 'undefined') {
                    page = 1;
                }
                 this.$axios.get('/category?page=' + page)
                   .then(data => {
                        this.categories = data.data.categories;
                    });
                // this.$axios.get("http://127.0.0.1:8000/api/posts/all").then(({ data }) => (this.posts = data.posts));
            },




    createCategory(e) {
      e.preventDefault();
      // let currentObject = this;

      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      let formData = new FormData();
      // formData.append("image", this.form.image);
      // formData.append( 'image', this.$refs.image.files[0] );
      formData.append("name", this.form.name);
      formData.append("about", this.form.about);

      this.$axios.post("/category", formData, config)
        .then((res) => {
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
              title: "تم إنشاؤه بنجاح",
            });
            this.reset();
            this.errors = [];
          }
        });
    },

    editCtaegory(category){
             this.form =category
            this.edit =true
        },


     editCategory1(e){
            e.preventDefault();
            // let currentObject = this;

            const config ={
                headers :{'content-type' :'multipart/form-data'}
            };
            let formData = new FormData();
            // formData.append('image',this.form.image);
            formData.append('name',this.form.name);
            formData.append('about',this.form.about);
            // formData.append( 'image', this.$refs.image.files[0] );
             formData.append('_method', 'PATCH');
              this.$axios.post('/category/'+this.form.id,formData,config).then(() => {


                          this.$toast.fire({
                            icon: "success",
                            title: "تم حفظ التغيرات بنجاح",
                          });
            })
            .catch(() => {

                });
        },


    reset() {
      this.form.name = "";
      // this.form.image = "";
      this.form.about = "";
    },

    deleteCategory(id) {
      Swal.fire({
        title: "? هل أنت واثق",
        text: "! لن تتمكن من التراجع عن هذا",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "نعم ، احذفها",
      }).then((result) => {
        if (result.value) {
          this.$axios.delete("/category/" + id, this.form)
            .then(() => {
              Swal.fire("Deleted!", "تم حذف ملفك.", "success");
            })
            .catch(() => {});
        }
      });
    },

    // onImageChange(e) {
    //   console.log(e.target.files[0]);
    //   this.form.image = e.target.files[0];
    // },
  },
};
</script>

