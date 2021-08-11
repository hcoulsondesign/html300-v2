<template>
  <div class="mainfooter">
    <div class="bg-dark py-5">
      <div class="w-25 mx-auto">
        <img alt="Winecierge logo" src="../assets/winecierge-logo-white.svg">
        <a href="#Top" class="text-white">Back to Top</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainfooter',
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
