<template>
  <div id="app">
    <!-- insert standard header component utilizing slots to populate some data-->
    <mainheader msg="Helping you plan your next wine experience">
      <template v-slot:tagline>Helping you plan your next wine experience</template>
      <template v-slot:WAwine>August 2021 ~ <span class="fst-italic">Join us in celebrating Washington Wine Month!</span> ~ August 2021</template>
    </mainheader>
    <!-- implement vue router for navigation between pages (individual page content in ./src/views)-->
    <div class="bg-danger text-white py-2" id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/education">Education</router-link> |
      <router-link to="/news">News</router-link>
    </div>
    <router-view/>

    <!-- insert standard footer component -->
    <mainfooter msg="test"/>
  </div>
</template>

<script>
// @ is an alias to /src
import mainheader from '@/components/mainheader.vue'
import mainfooter from '@/components/mainfooter.vue'


export default {
  name: 'App',
  components: {
    mainheader,
    mainfooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  color: white;
}

#nav a.router-link-exact-active {
  font-weight: bold;
  font-style: italic;
}
</style>
