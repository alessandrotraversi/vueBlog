<template lang="pug">
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item" :class="{active: n == active}" v-for="n in parseInt(total)">
      <button class="page-link" @click.prevent="navigate(n)">{{n}}</button>
    </li>
  </ul>
  <p>Page {{active}} of {{total}}, total registries: {{totalRegistries}} .</p>
</nav>
</template>

<script>
export default {
  name: 'pagination',
  props: [
    'totalPerPage',
    'resource'
  ],
  data: function () {
    return {
      active: 1
    }
  },
  computed: {
    registries () {
      return this.$store.state.pagination.getList
    },
    total () {
      return this.registries.last_page || 0
    },
    totalRegistries () {
      return this.registries.total || 0
    }
  },
  methods: {
    navigate: function (n) {
      this.active = n
      let config = {
        resource: this.resource,
        limit: this.totalPerPage,
        page: n
      }
      this.$store.dispatch('getRegistries', config)
    }
  },
  created () {
    this.$store.dispatch('getRegistries', {resource: this.resource, limit: this.totalPerPage})
  }
}
</script>