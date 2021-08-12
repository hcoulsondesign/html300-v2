<!-- gallery.vue -->
<template>
    <div>
      <!-- call the mixin to toggle the border on and off -->
      <div
      v-on:click="clicked()"
      v-bind:class="{addBorder:drawBorder}">
        <!-- iterate through all the data for each image -->
        <img :src="imageData.img_src" :alt="imageData.alt" class="img-fluid">
      </div>
      <p class="my-2 fw-bold">{{imageData.title }}</p>
      <p class="px-3 small">{{ imageData.description }}</p>
    </div>
</template>

<script>
import borderMixin from './../mixins/borderMixin'

export default {
  data () {
    return {
      drawBorder: false
    }
  },
  props: {
    imageData: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  mixins: [borderMixin] //pull in method to turn border 'on' and 'off' with each click
}
</script>

<style>
.addBorder {
  border: 4px solid #153345;
}
</style>
