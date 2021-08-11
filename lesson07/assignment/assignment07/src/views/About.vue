<template>
  <div class="about">
    <div class="w-75 mx-auto my-3">
      <h1 class="text-center py-3">{{ pageTitle }}</h1>
      <div class="container my-4 pt-4 pb-3 border border-black border-left-0">
        <div class="row">
          <div class="col-sm-12 col-lg-4 my-auto">
            <img src="../assets/head-shot.jpg" class="img-fluid pb-3" alt="">
          </div>
          <div class="col-sm-12 col-lg-8">
          <h3 class="font-italic">The Creator</h3>
          <p class="text-start">Growing up in a family of restaurateurs, Hannah learned to revere wine even before she could drink it. After graduating with a Bachelor of Arts in Biochemistry from Colby College, she joined the wine industry while living abroad in Marlborough, New Zealand. Putting her degree to use, Hannah worked in a winery laboratory before studying at Lincoln University where she earned a Graduate Diploma in Viticulture & Oenology with Distinction. Having completed nine New Zealand harvests, Hannah returned to the US in 2018 to settle in Washington state. She joined Gård Vintners in May 2021 and is also Assistant Winemaker for Desert Wind Winery.</p>
          <p class="text-start">Currently pursuing a Certificate in Web Design from the University of Washington, she uses her previous programming and graphic design training every chance she gets. When she’s not behind a computer, at the winery or enjoying great food and wine, you’ll find her adventuring by foot or kayak through the mountains of the Pacific Northwest.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-75 mx-auto my-3">
      <h3 class="text-center">Gallery</h3>
      <div class="flex-row">
        <!-- use v-for to loop through the image array and display using flexbox -->
        <div>
          <img v-for="pic in pictures" :key="pic.img" :src="pic.img" class="img-fluid col-sm-12 col-lg-3 m-3" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      pageTitle: 'About Winecierge',
      pictures: [ //image array
      {img: require("@/assets/gallery/dont-rush.jpg")},
      {img: require("@/assets/gallery/vines-sky.jpg")},
      {img: require("@/assets/gallery/wahluke-slope.jpg")},
      {img: require("@/assets/gallery/sauv-blanc.jpg")},
      {img: require("@/assets/gallery/charcuterie.jpg")},
      {img: require("@/assets/gallery/tasting-setting.jpg")}
    ]
    }
  }
}
</script>
