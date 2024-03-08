<template>
  <div>

 <div class="header pb-6 d-flex align-items-center" style="min-height: 500px;  background-size: cover; background-position: center top;">
      <!-- Mask -->
      <span class="mask bg-gradient-default opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-7 col-md-10">
            <h1 class="display-2 text-white">مرحبا </h1>
            <p class="text-white mt-0 mb-5">هذه هي صفحة ملفك الشخصي. يمكنك رؤية التقدم الذي أحرزته في عملك وإدارة مشاريعك أو المهام المعينة</p>

          </div>
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-xl-4 order-xl-2">
          <div class="card card-profile">
            <img src="/images/img-1-1000x600.jpg" alt="Image placeholder" class="card-img-top">
          <!-- <img src="/assets/img/brand/admin.jpg" alt="Image placeholder" class="card-img-top"> -->

            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img :src="getProfilePhoto()" class="rounded-circle">
                  </a>
                </div>
              </div>
            </div>
          <br><br><br>
            <div class="card-body pt-0">
              <div class="row">
                <div class="col">
                  <div class="card-profile-stats d-flex justify-content-center">
                    <div>
                      <span class="heading">22</span>
                      <span class="description">posts</span>
                    </div>
                    <!-- <div>
                      <span class="heading">10</span>
                      <span class="description">Photos</span>
                    </div>
                    <div>
                      <span class="heading">89</span>
                      <span class="description">Comments</span>
                    </div> -->
                  </div>
                </div>
              </div>
              <div class="text-center">
                <h5 class="h3">
                  {{form.name}}
                </h5>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i> {{form.email}}
                </div>
                <!-- <div v-if="isWriter" class="h5 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i> Writer|| الكاتب
                </div> -->
                 <div v-if="isAdmin" class="h5 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i> Admin ||المسؤول
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i> {{form.about}}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8 order-xl-1">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="pl-lg-4 text-center">
                  <h3 class="mb-0">تعديل معلومات الحساب  </h3>
                </div>
              </div>
            </div>
            <div class="card-body">
              <form>
                <div class="pl-lg-4">

                    <div class="pl-lg-4">
                      <div class="form-group">
                        <label class="form-control-label" for="input-username">الاسم</label>
                        <input type="text" id="input-username" class="form-control" placeholder="Username" v-model="form.name" >
                      </div>
                    </div>
                    <div class="pl-lg-4">
                      <div class="form-group">
                        <label class="form-control-label" for="input-email">الايميل </label>
                        <input type="email" id="input-email" class="form-control" placeholder="Email" v-model="form.email">
                      </div>
                    </div>

                    <!-- <div class="pl-lg-4">
                      <div class="form-group">
                        <label class="form-control-label" for="input-email">Image</label>
                        <input type="file" id="input-Image" class="form-control" placeholder="image" name="image"
              ref="image" v-on:change="onImageChange" >
                      </div>
                    </div> -->



                    <div class="pl-lg-4">
                      <div class="form-group">
                        <label class="form-control-label" for="input-last-name">رمز السري</label>
                        <input type="password" id="password" class="form-control" placeholder="Password" v-model="form.password">
                      </div>
                    </div>

                     <div class="pl-lg-4">
                      <div class="form-group">
                        <label class="form-control-label" for="input-first-name">Facebook(Optional)</label>
                        <input type="text" id="input-first-facebook" class="form-control" placeholder="Facebook" v-model="form.facebook">
                      </div>
                    </div>

                     <div class="pl-lg-4">
                      <div class="form-group">
                        <label class="form-control-label" for="input-first-name">Twitter(Optional)</label>
                        <input type="text" id="input-first-twitter" class="form-control" placeholder="Twitter" v-model="form.twitter">
                      </div>
                    </div>

                     <div class="pl-lg-4">
                      <div class="form-group">
                        <label class="form-control-label" for="input-first-name">Instagram(Optional)</label>
                        <input type="text" id="input-first-instagram" class="form-control" placeholder="Instagram" v-model="form.ins">
                      </div>
                    </div>

                     <!-- <hr class="my-4" /> -->
                <div class="pl-lg-4">
                  <div class="form-group">
                    <label class="form-control-label">حول </label>
                    <textarea rows="4" class="form-control" placeholder="A few words about you ..." v-model="form.about"></textarea>
                  </div>
                </div>
                  <button @click.prevent="EditProfile" type="submit" class="btn btn-neutral">حفظ التغيرات</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>

    </div>



  </div>
</template>

<script>

export default {
  layout:'admin-layout',
middleware: 'auth',
 computed:{
      isAdmin(){
          return this.$auth.user.type === 'admin'
      },
  },
    data() {
    return {
      user:{},
      form: {
                  id:'',
                   name:'',
                  email:'',
                  password:'',
                  image:'',
                  about:'',
                  facebook:'',
                  twitter:'',
                  ins:'',
                }
    }
  },


 created() {
         this.GetUser()
        },

  methods: {
 getProfilePhoto(){
             let photo = "http://127.0.0.1:8000/images/admin.png" ;
                return photo;
            },


    EditProfile(e){
                // this.$Progress.start();
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
      formData.append("email", this.form.email);
      formData.append("facebook", this.form.facebook);
      formData.append("twitter", this.form.twitter);
      formData.append("ins", this.form.ins);
      // formData.append("token", localStorage.removeItem('userToken'));
      // formData.append("token", localStorage.getItem('userToken'));
      formData.append("password", this.form.password);
             formData.append('_method', 'PUT');

              this.$axios.post('/auth/profile',formData,config).then((res) => {


             if (res.data.status == false) {
            //  this.errors = res.data.msg
            console.log(res.data.msg);
            this.$toast.fire({
              icon: "error",
              title: res.data.msg,
            });
                    // this.$Progress.fail();
          }
          else if (res.data.status === true) {
            this.$toast.fire({
              icon: "success",
              title: "تم حفظ البيانات بنجاح ",
            });
            // this.$Progress.finish();
      //  this.$store.commit('setUser', res.data.user)
            this.$router.push({name: 'admin-dashboard'});
          }
        })
        .catch((error) => {
          console.log(error.response);
                    // this.$Progress.fail();

        });
        },
 GetUser() {
       this.$axios.get("/auth/profile")

        .then(({ data }) =>{

          // this.posts = data.posts
         this.user = data;
           this.setForm()
        })
},

setForm() {
                this.form.name = this.user.name,
                this.form.password = this.user.password,
                this.form.email =this.user.email,
                this.form.image = this.user.image
                this.form.about = this.user.about
                this.form.facebook = this.user.facebook
                this.form.twitter = this.user.twitter
                this.form.ins = this.user.ins
            },
  },


}
</script>

