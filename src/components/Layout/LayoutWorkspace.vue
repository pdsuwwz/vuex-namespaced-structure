<template>
  <section class="app-main" flex="1">
    <h1>Vuex Namespaced Structure</h1>
    <p
      v-for="(link, index) in links"
      :key="index"
    >
      <router-link :to="link">{{ link }}</router-link>
    </p>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  data () {
    return {
      links: [
        '/process-mining/workspaces',
        '/process-mining/workspaces/100/edit'
      ]
    }
  }
}
</script>
