<template lang="pug">
<div class="blog-post">
    <h2 class="blog-post-title">{{post.title}}</h2>
    <p class="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p>

    <p>{{post.body}}</p>
</div>  

</template>

<script>
let conponentName = 'Post/View.vue';
console.log(conponentName +' has been loaded');
export default {
  name: 'post-view',
  methods: {
    remove: function (id) {
      this.$store.dispatch('removePost', this.$route.params.id)
        .then(() => {
          this.$router.push({name: 'public.post.list'})
        })
    }
  },
  computed: {
    post () {
      return this.$store.state.post.postView
    }
  },
  created () {
    this.$store.dispatch('getPost', this.$route.params.id)
    console.log(conponentName + ' working');
  }
}
</script>