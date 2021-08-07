<template>
  <div class="education">
    <section class="container mt-4">
      <!-- MAIN INFO -->
      <div class="row mx-auto my-3 ">
        <div class="col-12 text-center">
          <h1>Wine Education</h1>
          <h4>Lesson 1</h4>
        </div>
        <div class="col-sm-12 col-md-10 col-xl-8 mx-auto text-start my-3 border border-black">
          <h3 class="font-italic my-4">Senses Important to Wine Tasting</h3>
          <p>The overall assessment of a wine is based on detection of the wine's elements using these four senses:</p>
          <ol>
            <li>Sight</li>
            <li>Smell</li>
            <li>Taste</li>
            <li>Feel</li>
          </ol>
          <p><small>(Although it can give a hint as to just how sparkling a Champagne is, the fifth sense of hearing is not formally employed in wine tasting.)</small></p>
          <p>Below are brief descriptions with examples of how each sense is used to evaluate a wine. Click the <span class="text-info font-italic">teal</span> words for a full definition of key wine terms.</p>
          <h4 id="Sight">Sight</h4>
          <p>Wine tasters use the physical appearance of a wine to determine whether it meets their expectations of variety and style. This could include comparing the saturation of ruby vs brick-colored hues in a Pinot Noir or assessing the level of clarity in a German Riesling.</p>
          <h4 id="Smell">Smell</h4>
          <p>There are two main ways that humans detect <span class="text-info font-weight-bold" data-toggle="popover" title="Aroma" data-content="The individual, identifiable scents in a wine that are imparted by the characteristics of the grape">aromas</span> from their surroundings: directly through the nasal cavity <em> and </em> retronasally with the passage of aromatic compounds from the mouth and throat to the olfactory receptor at the back of the nasal cavity. Sense of smell can be used to identify a variety of aromas in wine, such as fruity or floral notes caused by the presence of esters and terpenes, respectively. Together these aromas contribute to the wine's <span class="text-info font-weight-bold" data-toggle="popover" title="Bouquet" data-content="The overall, complex matrix of scents detectable in the glass, resulting from the combination of grape aromas and winemaking practices">bouquet</span>.</p>
          <p>There are two main ways that humans detect <span v-on:click="showdef('aromas')" class="text-primary">aromas</span> <b-alert v-model="show" dismissible @dismissed="dismissed">{{definition}}</b-alert> from their surroundings: directly through the nasal cavity <em> and </em> retronasally with the passage of aromatic compounds from the mouth and throat to the olfactory receptor at the back of the nasal cavity. Sense of smell can be used to identify a variety of aromas in wine, such as fruity or floral notes caused by the presence of esters and terpenes, respectively. Together these aromas contribute to the wine's <span class="text-info font-weight-bold" data-toggle="popover" title="Bouquet" data-content="The overall, complex matrix of scents detectable in the glass, resulting from the combination of grape aromas and winemaking practices">bouquet</span>.</p>
          <h4 id="Taste">Taste</h4>
          <p>Taste is generally broken down into the 5 key flavors the human <span class="text-info font-weight-bold" data-toggle="popover" title="Palate" data-content="Refers to humans' ability to detect the flavor and textural attributes of a wine in the mouth">palate</span> can detect:</p>
          <ul>
            <li>Sweet</li>
            <li>Sour/Tart</li>
            <li>Bitter</li>
            <li>Salty*</li>
            <li>Umami</li>
          </ul>
          <p><small>*Although not common or desirable in wine, salty characters can ocasionally be detected.</small></p>
          <p>So, with only 5 different flavors on the list, how can we taste strawberries and cream in a rosé or chocolate in Merlot? Complex "flavors" that appear in wine (and food) are actually a combined perception of these 5 basic tastes with retronasal olfactory detection. In other words, the ability for humans to smell food and beverages through the back of the throat allows us to detect a myriad of different scent/taste combinations that we perceive as distinct food flavors.</p>
          <h4 id="Feel">Feel</h4>
          <p>Feel is perhaps one of the most important senses used in wine tasting but also the hardest to master. This is because there is a large number of tactile sensations created by a wine's interaction with the surfaces of the mouth, some of which can be considered either good <em>or</em> bad depending on the intended style of a wine. For example, the spicy, rustic <span class="text-info font-weight-bold" data-toggle="popover" title="Tannin" data-content="macromolecules present in wine that contribute to its color, texture, and long-term shelf stability">tannins</span> that contribute to the <span class="text-info font-weight-bold" data-toggle="popover" title="Mouthfeel" data-content="the physical, textural sensations detected in the mouth during tasting, such as weight, fullness, and length">mouthfeel</span> of a bold Bordeaux red can be a good thing, while the same characteristics are considered undesirable in lighter style reds and white wines such as Pinot Noir and Pinot Gris.</p>
          <div class="text-center">
            <button v-on:click="show = !show; toggletext()" class="btn-primary mb-3"> {{buttontext}} </button>
          </div>
        </div>
        <!-- SIDEBAR INFO -->
        <aside v-if="show" class="col-sm-12 col-md-8 col-xl-3 mx-auto my-3 bg-primary text-start text-white">
          <div class="p-3">
            <h3 class="my-4 text-center">For interest's sake...</h3>
            <h4>Professional Wine Tasting</h4>
            <p>At the professional level, wine tasting takes on a scientific, analytical nature. Tasting panels typically rank wines on a 5, 10, or 20 point scale based on four main categories:</p>
            <ol>
              <li><span class="font-weight-bold">Appearance</span> (including color, color intensity, and clarity)</li>
              <li><span class="font-weight-bold">Aromatics</span> (including both grape aromas and elements of the bouquet)</li>
              <li><span class="font-weight-bold">Flavor and Mouthfeel</span> (incorporating characteristics detected through both taste and feel)</li>
              <li><span class="font-weight-bold">Overall Impression</span></li>
            </ol>
            <p>At the highest professional level, panelists may taste and score as many as 10 wines in a flight in the span of a few minutes, which means they taste hundreds of wines in a day!</p>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'education',
    data () {
      return {
        show: false,
        vocab: [
          {word: 'aromas', definition: 'The individual, identifiable scents in a wine that are imparted by the characteristics of the grape'},
          {word: 'bouquet', definition: 'The overall, complex matrix of scents detectable in the glass, resulting from the combination of grape aromas and winemaking practices'}
        ],
        buttontext: "Show More Info",
        counter: 0
      }
    },
    methods:{
      showdef: function(word){
        alert(word)
      },
      toggletext: function(){
        this.counter++
        if(this.counter%2 != 0) {
          this.buttontext = "Hide Sidebar"
        }
        else {
          this.buttontext = "Show More Info"
        }
      }
    }
  }
</script>
