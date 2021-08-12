<!-- mainheader component modified to use slots instead of props -->
<template>
  <div class="mainheader">
    <div class="bg-dark">
      <div class="w-50 mx-auto pt-5 pb-4">
        <img alt="Winecierge logo" src="../assets/winecierge-logo-white.svg">
        <h5 class="text-white">
          <slot name='tagline'>Welcome to Winecierge</slot>
        </h5>
      </div>
    </div>
    <h4 class="bg-secondary fw-bold text-white m-0 py-4">
      <slot name='WAwine'>August is Washington Wine Month</slot>
    </h4>
  </div>
</template>

<script>
export default {
  name: 'mainheader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
