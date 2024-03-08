<template>
  <div>
     <!-- Header -->
    <div class="header bg-primary pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7 text-left">
              <h6 class="h2 text-white d-inline-block mb-0">المقالات</h6>
              <nav
                aria-label="breadcrumb"
                class="d-none d-md-inline-block ml-md-4"
              >
                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li class="breadcrumb-item">
                    <nuxt-link to="/dashboard"
                      ><i class="fa fa-home" aria-hidden="true"></i></nuxt-link>
                  </li>
                  <li class="breadcrumb-item">
                    <nuxt-link to="/posts">المقالات</nuxt-link>
                  </li>
                  <li class="breadcrumb-item">تعديل</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Page content -->
    <div class="container-fluid mt--6 bg-success">
      <div class="row">
        <div class="col">
          <h1>تعديل المقال</h1>
        </div>
      </div>
    </div>

    <div class="col-md-10 container">
      <form action="/admin/user" method="POST" class="my-5">
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="name">عنوان </label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Title"
                v-model="form.title"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="form-group col-sm-6">
            <label for="exampleFormControlSelect1"> اختر قسم</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              v-model="form.category_id"
            >
              <option>اختر قسم</option>
              <!-- <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"


                >{{ category.name }}</option> -->

                <option :value="category.id" v-for="category in categories" :key="category.id"
                        :selected="category.id === form.category_id"
                    >{{ category.name }}</option>
            </select>
          </div>



               <div class="col-sm-6">
                  <div class="form-group">
            <label for="exampleFormControlTextarea1"> صورة</label>
            <input
              type="file"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="image"
              ref="image"
              v-on:change="onImageChange"
            />
          </div>
              </div>


        </div>

   <!-- <input type="hidden" name="user_id"  v-model="form.user_id"> -->
         <div class="row">
          <div class="col-sm-6">


   <fieldset class="form-group">
    <div class="row">
      <!-- <legend class="col-form-label col-sm-2 pt-0">Radios</legend> -->
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="0" v-model="form.featured" checked>
          <label class="form-check-label" for="gridRadios1">
            غير مميز
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" v-model="form.featured" value="1">
          <label class="form-check-label" for="gridRadios2">
            مميز
          </label>
        </div>

      </div>
    </div>
  </fieldset>
          </div>

          <div class="col-md-6">
              <div class="form-group">
                  <label for="exampleFormControlTextarea1"> (SEO) ميتا الوصف </label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" cols="15" rows="8" v-model="form.meta_description"></textarea>
                </div>
       </div>
        </div>


        <div class="form-group ">
          <label for="exampleFormControlTextarea1">المحتوى</label>
           <!-- <no-ssr> -->
          <!-- <vue-editor v-model="form.content"></vue-editor> -->
          <VueEditor v-model="form.content"/>
          <!-- <Editor v-model="info"/> -->

    <!-- </no-ssr> -->
        </div>
        <button @click="EditPost" type="submit" class="btn btn-primary">
         حفظ التغيرات
        </button>
      </form>
    </div>
  </div>
</template>




<script>
// import axios from "axios"
// import VueEditor  from "vue2-editor";
// const VueEditor = process.client ? require('vue2-editor') : '';
// import Editor from "~/components/Editor";
export default {
   layout:'admin-layout',
middleware: 'auth',


  data() {
    return {
      categories: [],
      // tags: [],
      post: {},
      form: {
        id: "" ,
        title: "",
       meta_description: "",
        featured:'',
        content: "",
        category_id: "",
        image: "",
        // tags: [],
      },
    };
  },

  // components: {
  //   VueEditor,
  //   // Editor
  // },
  created() {
 this.GetCategory();
    // this.GetTag();
    this.GetPost();
  },

  methods: {
    EditPost(e){
             e.preventDefault();
      // let currentObject = this;
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      let formData = new FormData();
      formData.append("image", this.form.image);
      // formData.append( 'image', this.$refs.image.files[0] );
      formData.append("title", this.form.title);
      formData.append("category_id", this.form.category_id);
      formData.append("content", this.form.content);
      formData.append("meta_description", this.form.meta_description);
      formData.append("featured", this.form.featured);
      // formData.append("user_id", this.post.user_id);



             formData.append('_method', 'PATCH');
              this.$axios.post('/post/'+ this.$route.params.id,formData,config).then((res) => {


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
              title: "تحرير المقال بنجاح ",
            });

            this.$router.push("/admin/posts");
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
        },


    GetCategory() {
      this.$axios
        .get("/category")
        .then(({ data }) => ( this.categories = data.categories.data));
    },


    // GetTag() {
    //   this.$axios
    //     .get("http://127.0.0.1:8000/api/tag")
    //     .then(({ data }) => (this.tags = data.tags));
    // },
     GetPost() {
      this.$axios
        .get("/post/"+ this.$route.params.id)
        .then(({ data }) =>{

          // this.posts = data.posts
         this.post = data.data;
           this.setForm(this.post)
        });
    },

setForm() {
                this.form.category_id = this.post.category.id,
                this.form.title = this.post.title,
                this.form.content =this.post.content,
                this.form.image = this.post.image,
                this.form.featured = this.post.featured
                this.form.meta_description = this.post.meta_description
            },

    onImageChange(e) {
      console.log(e.target.files[0]);
      this.form.image = e.target.files[0];
    },
  },
};
</script>



