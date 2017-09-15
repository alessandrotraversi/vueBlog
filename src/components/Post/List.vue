<template lang="pug">
<div class="row">
	<article v-for='post in posts' class="mb-3">
		<div class="card card-inverse" style="background-color: #333; border-color: #333;" >
			<div class="card-block">
				<h3 class="card-title">{{post.title}}</h3>
				<p class="card-text">{{post.body}}</p>
				<button @click="goTo(post.id)" class="btn btn-primary">Go somewhere</button>
			</div>
		</div>
	</article>
	<pagination totalPerPage="10" resource="posts/"></pagination>
</div>
</template>

<script>
import pagination from './../ui/Pagination';

let conponentName = 'Post/List.vue';
console.log(conponentName +' has been loaded');

export default {
  name: 'posts',
  components: {
    pagination
  },
  methods: {
    goTo: function (id) {
      this.$router.push('/posts/' + id)
    }
  },
  computed: {
    posts () {
      return this.$store.state.pagination.getList
    }
  },
  created () {
  	this.$store.dispatch('getPosts');
    return console.log(conponentName + ' working');
  }
}
</script>
