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
      <!-- use v-for to loop through the image array and display using flexbox -->
      <div class="d-flex flex-row flex-wrap justify-content-around">
        <div v-for="(pic, i) in pics" :key="i" class="col-sm-12 col-lg-5 m-3">
          <gallery :image-data="pic"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gallery from '@/components/gallery.vue'

export default {
  name: 'about',
  components: {
    gallery
  },
  data () {
    return {
      pageTitle: 'About Winecierge',
      pics: [
        {
          'img_src': require('@/assets/gallery/dont-rush.jpg'),
          'alt': 'A young woman unpacks wine from a picnic basket in front of rows of grapes in front of a background of vineyards and Red Mountain',
          'title': 'Picnicking at the foothills of Red Mountain',
          'description': 'Many wineries on Red Mountain invite visitors to bring their own picnic to pair with the wines from their tasting room'
        },
        {
          'img_src': require('@/assets/gallery/vines-sky.jpg'),
          'alt': 'A lush canopy of green grape leaves reach skyward toward brilliant blue sky',
          'title': 'Canopy growth in early summer',
          'description': 'Long sunny days and cool nights provide the perfect growing conditions for lush green canopies'
        },
        {
          'img_src': require('@/assets/gallery/wahluke-slope.jpg'),
          'alt': 'Neatly planted rows of vines stretch the mountains under a blanket of clouds',
          'title': 'Wahluke Slope Syrah',
          'description': 'With a higher seasonal heat index throughout the AVA, fruit from the Wahluke Slope is some of the first to ripen each season'
        },
        {
          'img_src': require('@/assets/gallery/sauv-blanc.jpg'),
          'alt': 'Plump Sauvignon Blanc clusters are nestled amongst a dappled canopy',
          'title': 'Boushey Vineyard Sauvignon Blanc',
          'description': 'Dappled canopy coverage protects the berries from late afternoon sunburn'
        },
        {
          'img_src': require('@/assets/gallery/charcuterie.jpg'),
          'alt': 'Sliced cheese, meat, and fruits arranged on a cheese board',
          'title': 'Charcuterie for Four',
          'description': 'Many wineries offer charcuterie to be enjoyed alongside the wines'
        },
        {
          'img_src': require('@/assets/gallery/tasting-setting.jpg'),
          'alt': 'Wine glasses and tasting menus are laid out on a rustic wooden table in preparation for a tasting appointment',
          'title': 'Tasting Among the Barrels',
          'description': 'With advance reservations, guests to a winery can enjoy a tasting among the oak barrels led by the winemaker'
        }
      ]
    //   pictures: [ //image array
    //   {img: require("@/assets/gallery/dont-rush.jpg")},
    //   {img: require("@/assets/gallery/vines-sky.jpg")},
    //   {img: require("@/assets/gallery/wahluke-slope.jpg")},
    //   {img: require("@/assets/gallery/sauv-blanc.jpg")},
    //   {img: require("@/assets/gallery/charcuterie.jpg")},
    //   {img: require("@/assets/gallery/tasting-setting.jpg")}
    // ]
    }
  }
}
</script>
