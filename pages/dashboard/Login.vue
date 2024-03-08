<template>
  <div>
<br><br> <br><br>    <div class="modal-dialog" role="document" >
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLabel">Login Admin</h4>
        <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> -->
      </div>
      <div class="modal-body">
        <div class="login-form">
          <form action="/examples/actions/confirmation.php" method="post" nonvalidate>
              <h2 class="text-center">تسجيل دخول الادمين</h2>
              <br>

              <div class="form-group">
                  <input type="email" class="form-control" placeholder="الايميل " v-model="login.email">
                  <div v-show="emailError" class="text-danger">
                     <!-- ... the email is not valid -->
                     ... البريد الإلكتروني غير صالح
                  </div>
              </div>
              <div class="form-group">
                  <input type="password" class="form-control" placeholder="الباسورد" v-model="login.password">
                  <div v-show="passwordError" class="text-danger">
                     <!-- ... the password is too short -->
                     ... كلمة المرور قصيرة جدًا
                  </div>
              </div>
              <div class="form-group">
            <div style="color:red;" v-if="error">{{ error }}</div>

              </div>

              <div class="form-group">
                  <button type="submit"
                  class="btn btn-primary btn-block"
                  :disabled="!isValidForm"
                  @click.prevent="userLogin"
                  >Log in</button>
              </div>
              <!-- <div class="clearfix">
                  <a href="#" class="pull-right">Forgot Password?</a>
              </div> -->
          </form>
          <!-- <p class="text-center"><a class="switch-toregister-modal" href="#">Create an Account</a></p> -->
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  //  layout:'admin-layout',
middleware: 'guest',
// auth: 'guest',

data(){
         return {
           login:{
              password : '',
               email : ''
           },
             error: ''
         }
     },
     computed:{
         emailError(){
           return !(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(this.login.email)) && this.login.email.length > 0

         },
         passwordError(){
             return this.login.password.length > 0 && this.login.password.length < 6
         },
         isValidForm(){
             return this.login.password.length > 5 && (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(this.login.email))
         }
     },
     methods:{
async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })
        this.$toast.fire({
              icon: "success",
              title: response.data.msg,
            });
        console.log(response)
     this.$router.push('/admin/dashboard')
      } catch (err) {
        console.log(err)
        this.error = "  يوجد خطأ في ملأ البيانات او غير مصرح بك";
      }
    },




      //  submitLogin(){
      //   //  let {email,password} = this;
      //      this.$store.dispatch('LoginUser',{
      //     email: this.login.email,
      //     password: this.login.password
      //   }).then(res => {
      //     console.log(res)
      //     // this.isLoading = false;
      //     this.$toast.fire({
      //         icon: "success",
      //         title: res.data.msg,
      //       });
      //     this.$router.push({name: 'admin-dashboard'});
      //     //  window.location.pathname = "/admin/dashboard"
      //   })
      //   .catch(err => {
      //     // this.isLoading = false;
      //     this.error = "  يوجد خطأ في ملأ البيانات او غير مصرح بك";
      //     // this.error = " There was error during login process";
      //     console.log(err.msg);
      //   });
      //  },

     }
}
</script>



