<template>
  <div>

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
            <h5 v-if="edit" class="modal-title" id="exampleModalLabel">Edit User</h5>
            <h5 v-else class="modal-title" id="exampleModalLabel">New User</h5>

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
                <label for="exampleFormControlInput1">Name </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Name ..."
                  v-model="form.name"
                />
                <!-- <div style="color:red;" v-if="errors">{{  errors}}</div> -->
              </div>

             <div class="form-group">
                <label for="exampleFormControlInput1">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email ..."
                  v-model="form.email"
                />
                <!-- <div style="color:red;" v-if="errors">{{  errors}}</div> -->
              </div>
               <div class="form-group">
                <label for="exampleFormControlInput1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="password ..."

                  v-model="form.password"
                />
                <!-- <div style="color:red;" v-if="errors">{{  errors}}</div> -->
              </div>

               <div class="form-group">

             <label for="exampleFormControlInput1">Type</label>
            <select
              class="form-control custom-select"
              id="exampleFormControlSelect1"
              v-model="form.type" required
            >
      <option value="">Open this select menu</option>

              <option value="user">User</option>
              <option value="writer">Writer</option>
              <option value="admin">Admin</option>


            </select>

          </div>


              <!-- <span v-if="errors" class="alert alert-danger"> {{errors[0]}}</span> -->
            </form>
            <!-- End model -->
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal" >Close </button>
              <button v-if="edit" type="button" class="btn btn-primary" @click="editUser1"> Save changes </button>
            <button v-else  type="button" class="btn btn-primary" @click="createUser"> Create  </button>
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
              <h6 class="h2 text-white d-inline-block mb-0">Users</h6>
              <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li class="breadcrumb-item"><router-link to="/dashboard"> <i class="fa fa-home" aria-hidden="true"></i></router-link></li>
                  <li class="breadcrumb-item"><router-link to="/users">Users</router-link></li>
                </ol>
              </nav>
            </div>
            <div class="col-lg-6 col-5 text-right">
              <button
                type="button"
                class="btn btn-lg btn-neutral"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                New User
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
              <h3 class="mb-0">Users table</h3>
            </div>
            <!-- Light table -->
            <div class="table-responsive">
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th scope="col" class="sort" data-sort="name">Id</th>
                    <th scope="col" class="sort" data-sort="budget">Name</th>
                    <th scope="col" class="sort" data-sort="status">Email</th>

                    <th scope="col" class="sort" data-sort="completion">type</th>
                    <th scope="col" class="sort" data-sort="completion">Modify</th>

                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody class="list">

                  <tr v-for="user in users.data" :key="user.id">
                    <th scope="row">{{user.id}}</th>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td class="budget">{{user.type}}</td>
                    <td>

                      <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal" @click="editUser(user)"> <i class="fa fa-edit blue"></i></button>

                      <a href="#" class="btn btn-youtube btn-sm" @click="deleteUser(user.id)">
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

                 <pagination :data="users" @pagination-change-page="getResults">
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

export default {
   layout:'admin-layout',
  //  middleware: 'authenticated',
middleware: 'auth',
 components:{
    pagination
     },



 data() {
    return {
        users : {},
           edit:false,
    form: {
        id: "",
        name: "",
        email: "",
        type:"",
        password :""
      },
    }
  },

created () {
  //  axios.get("http://127.0.0.1:8000/api/user").then(({ data }) => (this.users = data));
this.getResults();

},
     methods: {


getResults(page) {
                if (typeof page === 'undefined') {
                    page = 1;
                }
                 this.$axios.get('/user?page=' + page)
                   .then(data => {
                        this.users = data.data.users;
                    });
                // this.$axios.get("http://127.0.0.1:8000/api/posts/all").then(({ data }) => (this.posts = data.posts));
            },




    createUser(e) {
      e.preventDefault();
      // let currentObject = this;


      let formData = new FormData();
      formData.append("type", this.form.type);
      // formData.append( 'image', this.$refs.image.files[0] );
      formData.append("name", this.form.name);
      formData.append("password", this.form.password);
      formData.append("email", this.form.email);

      this.$axios.post("/user", formData)
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
              title: "تم انشاء مستخدم جديد",
            });
            this.reset();
            this.errors = [];
          }
        });
    },

    editUser(user){
             this.form =user
            this.edit =true
        },


     editUser1(e){
            e.preventDefault();
            // let currentObject = this;


            let formData = new FormData();
            formData.append('type',this.form.type);
            formData.append('name',this.form.name);
            formData.append('email',this.form.email);
            formData.append( 'password', this.form.password);
             formData.append('_method', 'PATCH');
              this.$axios.post('/user/'+this.form.id,formData).then((res) => {


                          // this.$toast.fire({
                          //   icon: "success",
                          //   title: "Edit successfully",
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
              title: "تم حفظ التغيرات بنجاح",
            });
            // this.reset();
            // this.errors = [];
          }
            })
        },


    reset() {
      this.form.name = "";
      this.form.type = "";
      this.form.email = "";
      this.form.password ="";
    },

    deleteUser(id) {
      Swal.fire({
        title: " ? هل أنت واثق",
        text: "! لن تتمكن من التراجع عن هذا",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "نعم ، احذفها ",
      }).then((result) => {
        if (result.value) {
          this.$axios.delete("/user/" + id, this.form)
            .then(() => {
              Swal.fire("Deleted!", "تم حذف ملفك.", "success");
            })
            .catch(() => {});
        }
      });
    },





          }
}
</script>
