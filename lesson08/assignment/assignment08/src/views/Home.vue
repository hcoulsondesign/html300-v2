<template>
  <div class="home">
    <section>
      <div class="w-75 mx-auto my-3">
        <!-- use flexbox to display images and captions populated from an object using v-for -->
        <div class="d-flex flex-wrap justify-content-center">
          <div v-for="blurb in blurbs" :key="blurb" class="col-sm-12 col-md-5 m-3">
            <h3>{{blurb.title}}</h3>
            <p class="fst-italic">{{blurb.blurb}}</p>
            <img :src="blurb.img" class="img-fluid" alt="">
          </div>
        </div>
      </div>

      <!-- JUMBOTRON -->
      <div class="jumbotron jumbotron-fluid w-75 mb-5 mx-auto border border-danger rounded">
        <div class="container w-75">
          <h1 class="display-4 mx-auto">This month only...</h1>
          <p class="lead mx-auto">For the month of August, receive 15% off Riedel glassware at William Sonoma. Use code <span class="text-danger text-uppercase font-italic fw-bold bg-dark px-2 py-1">winecierge</span> at checkout.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      blurbs: [ //image and caption object
      {
        title: 'Winecierge',
        blurb: 'We\'re here to serve as a concierge of wine experiences for burgeoning wine enthusiasts.',
        img: require("@/assets/red-mtn.jpg")
      },
      {
        title: 'Wine Education',
        blurb: 'Follow our blog of brief lessons about wine regions, the science of winemaking, and sensory appreciation of wine.',
        img: require("@/assets/wine-education.jpg")
      },
      {
        title: 'Industry News',
        blurb: 'Learn the latest in industry happenings that affect the grape growing season, vintage availability, and the marketplace.',
        img: require("@/assets/merlot-cluster.jpg")
      },
      {
        title: 'My Cellar',
        blurb: 'Keep track of the wines you own and those you hope to acquire. Organize your collection by region, variety, or vintage.',
        img: require("@/assets/bottle-cellar.jpg")
      }
      ]
    }
  }
}
</script>
