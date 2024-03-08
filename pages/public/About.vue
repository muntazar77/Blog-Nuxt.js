<template>
  <div>
<MastPage>
            <div class="row">
              <div class="col-md-12"><br>
                <!-- <h2 class="mb-4">Hi There! I'm Meagan Smith</h2> -->
                <p class="mb-5"><img src="/images/date.jpg" alt="Image placeholder" class="img-fluid"></p>
                <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum minima eveniet recusandae suscipit eum laboriosam fugit amet deleniti iste et. Ad dolores, necessitatibus non saepe tenetur impedit commodi quibusdam natus repellat, exercitationem accusantium perferendis officiis. Laboriosam impedit quia minus pariatur!</p>
                <p>Dignissimos iste consectetur, nemo magnam nulla suscipit eius quibusdam, quo aperiam quia quae est explicabo nostrum ab aliquid vitae obcaecati tenetur beatae animi fugiat officia id ipsam sint? Obcaecati ea nisi fugit assumenda error totam molestiae saepe fugiat officiis quam?</p>
                <p>Culpa porro quod doloribus dolore sint. Distinctio facilis ullam voluptas nemo voluptatum saepe repudiandae adipisci officiis, explicabo eaque itaque sed necessitatibus, fuga, ea eius et aliquam dignissimos repellendus impedit pariatur voluptates. Dicta perferendis assumenda, nihil placeat, illum quibusdam. Vel, incidunt?</p>
                <p>Dolorum blanditiis illum quo quaerat, possimus praesentium perferendis! Quod autem optio nobis, placeat officiis dolorem praesentium odit. Vel, cum, a. Adipisci eligendi eaque laudantium dicta tenetur quod, pariatur sunt sed natus officia fuga accusamus reprehenderit ratione, provident possimus ut voluptatum.</p> -->
                <p class="mb-5" v-html="about"></p>
              </div>
            </div>



</MastPage>
  </div>
</template>
<script>
import MastPage from "@/components/mastPublic.vue";
export default {
  async asyncData({$axios}) {
  // const post = await $axios.$get(`https://my-api/posts/${params.id}`)
    const about = await $axios.$get('/settings')
    return {
      about: about.settings.about,

    }
},
  data() {
    return {
      about:''
    }
  },
  components: {
    MastPage,
  },
//     created () {
//   // this.GetSettings();

// },
head () {
    return {
      title: "حول ",
      meta: [
        {
           hid: 'description',
         name: 'description',
         content: this.about,


        }
      ]
    }
  },
  // methods: {
  //  GetSettings() {
  //     this.$axios
  //       .get("/settings")
  //       .then(({ data }) =>{
  //         // this.posts = data.posts
  //        this.about = data.settings.about ;
  //       });
  //   },

  // },
}
</script>
