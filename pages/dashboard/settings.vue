<template>
  <div>

    <div class="header bg-primary pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7 text-left">
              <h6 class="h2 text-white d-inline-block mb-0">اعدادات</h6>
              <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li class="breadcrumb-item"><router-link to="/dashboard"> <i class="fa fa-home" aria-hidden="true"></i></router-link></li>
                  <li class="breadcrumb-item"><router-link to="/setting">اعدادات</router-link></li>
                </ol>
              </nav>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--6">
      <div class="row">

        <div class="table-responsive">
          <div class="card ">
            <div class="card-header container">
              <div class="row align-items-center">
                <div class="col-8 text-center">
                  <h2 class="mb-0">اعدادات </h2>
                </div>
              </div>
            </div>
            <div class="card-body container">
              <form>
                <div class="col-lg-8 text-center">


                      <div class="form-group">
                        <label class="form-control-label" for="input-username">اسم الموقع</label>
                        <input type="text" id="input-username j" class="form-control" placeholder="Username" v-model="form.log_name">
                      </div>



              <div class="form-row">
                  <div class="form-group col-md-6">
                    <label class="form-control-label" for="inputEmail4">الايميل</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" v-model="form.email">
                  </div>
                  <div class="form-group col-md-6">
                    <label class="form-control-label" for="inputPassword4">رقم </label>
                    <input type="tel" class="form-control" id="inputPassword4" placeholder="Password" v-model="form.phone">
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-control-label" for="inputAddress">وصف الموقع </label>
                 <textarea class="form-control" cols="15" rows="8" placeholder="وصف الموقع " v-model="form.addres"></textarea>

                  <!-- <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" > -->
                </div>



                      <div class="form-group">
                        <label class="form-control-label" for="input-first-name">فيسبوك</label>
                        <input type="text" id="t4" class="form-control" placeholder="Facebook" v-model="form.facebook">
                      </div>

                      <div class="form-group">
                        <label class="form-control-label" for="input-first-name">تويتر</label>
                        <input type="text" id="t" class="form-control" placeholder="Twitter" v-model="form.twitter">
                      </div>

                      <div class="form-group">
                        <label class="form-control-label" for="input-first-name">انستجرام</label>
                        <input type="text" id="instagram" class="form-control" placeholder="Instagram" v-model="form.instegrm">
                      </div>

                    <!-- <vue-editor v-model="form.about"></vue-editor> -->

                     <!-- <hr class="my-4" /> -->
                   <div class="form-group ">
                    <label for="exampleFormControlTextarea1">حول الموقع</label>
                    <!-- <vue-editor  v-model="form.about"></vue-editor> -->
                     <VueEditor v-model="form.about"/>
                  </div>
                  <button @click="EditSettings"  type="submit" class="btn btn-neutral">حفظ الاعدادات</button>
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
// import { VueEditor } from "vue2-editor";

export default {
   layout:'admin-layout',
middleware: 'auth',


  data() {
    return {
      settings: {},
      form:{
        log_name : "",
        // log_image : "",
        about : "",
        instegrm : "",
        twitter : "",
        facebook : "",
        phone : "",
        email : "",
        addres : "",
      }

    }
  },


    created () {

  this.GetSettings();

},
methods: {

    EditSettings(e){
             e.preventDefault();
      // let currentObject = this;
      // const config = {
      //   headers: { "content-type": "multipart/form-data" },
      // };
      let formData = new FormData();
      formData.append("log_name", this.form.log_name);
      // formData.append("log_image", this.settings.log_image);
      formData.append("phone", this.form.phone);
      formData.append("email", this.form.email);
      formData.append("about", this.form.about);
      formData.append("twitter", this.form.twitter);
      formData.append("facebook", this.form.facebook);
      formData.append("instegrm", this.form.instegrm);
      formData.append("addres", this.form.addres);

             formData.append('_method', 'PUT');
              this.$axios.post('/settings/update',formData).then((res) => {

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
              title: "Edit Settings successfully ",
            });

            // this.$router.push("/posts");
          }
        })
        .catch((error) => {
          console.log(error.response);
           this.$toast.fire({
              icon: "error",
              title: "حدث خطأ في حفظ البيانات !",
            });
        });
        },

     GetSettings() {
      this.$axios
        .get("/settings")
        .then(({ data }) =>{

          // this.posts = data.posts
         this.settings = data.settings ;
           this.setForm()
        });
    },


    setForm() {

                this.form.log_name = this.settings.log_name,
                // this.form.log_image = this.settings.log_image,
                this.form.about = this.settings.about,
                this.form.twitter =this.settings.twitter,
                this.form.facebook = this.settings.facebook,
                this.form.instegrm = this.settings.instegrm,
                this.form.phone = this.settings.phone,
                this.form.email = this.settings.email,
                this.form.addres = this.settings.addres
            },
  },

}
</script>
