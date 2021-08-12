<!-- gallery.vue -->
<template>
    <div>
      <div
      v-on:click="clicked()"
      v-bind:class="{addBorder:drawBorder}">
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
  mixins: [borderMixin]
}
</script>

<style>
.addBorder {
  border: 4px solid #153345;
}
</style>
