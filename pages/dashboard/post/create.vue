<template>
  <div>

      <!-- Header -->
    <!-- Header -->
    <div class="header bg-primary pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7 text-left">
              <h6 class="h2 text-white d-inline-block mb-0">Posts</h6>
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
                    <nuxt-link to="/posts">Posts</nuxt-link>
                  </li>
                  <li class="breadcrumb-item">Create</li>
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
          <h1>انشاء مقالة</h1>
        </div>
      </div>
    </div>

    <div class="col-md-10 container">
      <form action="/admin/user" method="POST" class="my-5">
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="name">العنوان  </label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Title"
                v-model="post.title"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="form-group col-sm-6">
            <label for="exampleFormControlSelect1"> اختر القسم</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              v-model="post.category_id"
            >
              <option>اختر قسم</option>
              <option
                v-for="category in categories.data"
                :key="category.id"
                :value="category.id"
                >{{ category.name }}</option
              >
            </select>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="exampleFormControlTextarea1">  صورة </label>
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





       <input type="hidden" name="user_id" value="" v-model="post.user_id">
        <div class="row">
          <div class="col-sm-6">


   <fieldset class="form-group">
    <div class="row">
      <!-- <legend class="col-form-label col-sm-2 pt-0">Radios</legend> -->
      <div class="col-sm-5">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="0" v-model="post.featured" checked>
          <label class="form-check-label" for="gridRadios1">
            غير مميز
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" v-model="post.featured" value="1">
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
    <textarea class="form-control" id="exampleFormControlTextarea1" cols="15" rows="8" v-model="post.meta_description"></textarea>
  </div>
       </div>

        </div>

        <div class="form-group ">
          <label for="exampleFormControlTextarea1">المحتوى</label>
          <!-- <vue-editor v-model="post.content"></vue-editor> -->
          <VueEditor v-model="post.content"/>
        </div>

        <button @click="CreatePost" type="submit" class="btn btn-primary">
         انشاء
        </button>
      </form>
    </div>


  </div>
</template>




<script>
// import axios from "axios"
// import { VueEditor } from "vue2-editor";
// const VueEditor = process.BROWSER_BUILD ? require('vue2-editor') : '';
// const VueEditor = process.client ? require('vue2-editor') : '';



export default {
   layout:'admin-layout',
   middleware: 'auth',

  data() {
    return {
      categories: [],
      //  value: [],

      post: {
        id: "",
        user_id:"",
        title: "",
        featured:'0',
        content: "",
        category_id: "",
        image: "",
        meta_description:''
      },
    };
  },

  mounted() {
    this.GetCategory();
  },

  methods: {
    CreatePost(e) {
      e.preventDefault();
      // let currentObject = this;

      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      let formData = new FormData();
      formData.append("image", this.post.image);
      // formData.append( 'image', this.$refs.image.files[0] );
      formData.append("title", this.post.title);
      formData.append("category_id", this.post.category_id);
      formData.append("featured", this.post.featured);

      formData.append("meta_description", this.post.meta_description);
      formData.append("content", this.post.content);
      formData.append("user_id", this.post.user_id);

      this.$axios
        .post("/post", formData, config)
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
              title: "تم انشاء المقالة بنجاح ",
            });
            // this.reset();
            this.$router.push("/admin/posts");
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    // reset() {
    //   this.post.title = "";
    //   this.post.image = "";
    //   this.post.content = "";
    //   // this.post.content = "";
    //   // this.post.Special = "";
    // },

    GetCategory() {
      this.$axios
        .get("/category")
        .then(({ data }) => (
          this.categories =data.categories ,
          this.post.user_id = data.user_id

          ));
    },

    onImageChange(e) {
      console.log(e.target.files[0]);
      this.post.image = e.target.files[0];
    },
  },
};
</script>
