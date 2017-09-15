import Vue from 'vue'

let postApiBasePath = 'posts/';

export default {
  state: {
    postList: [],
    postView: {}
  },
  mutations: {
    updatePostList (state, data) {
      state.postList = data
    },
    updatePostView (state, data) {
      state.postView = data
    }
  },
  actions: {
    getPosts (context) {
      Vue.http.get(postApiBasePath).then(response => {
        context.commit('updatePostList', response.data)
      })
    },
    getPost (context, id) {
      Vue.http.get(postApiBasePath + id).then(response => {
        context.commit('updatePostView', response.data)
      })
    },
    newPost (context, data) {
      Vue.http.post(postApiBasePath, data)
    },
    updatePost (context, params) {
      Vue.http.put(postApiBasePath + params.id, params.data)
    },
    removePost (context, id) {
      Vue.http.delete(postApiBasePath + id)
    }
  }
}