<template>
  <div class="mainheader">
    <div class="bg-dark">
      <div class="w-50 mx-auto pt-5 pb-4">
        <img alt="Winecierge logo" src="../assets/winecierge-logo-white.svg">
        <h5 class="mb-0 pb-4 text-white text-center">{{ msg }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainheader',
  props: {
    msg: String
  }
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
