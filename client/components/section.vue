<template>
  <Generic v-if="sec.type === 'generic'" :content="sec" />
  <Jumbo v-else-if="sec.type === 'hero'" :content="sec" />
  <Faq v-else-if="sec.type === 'faq'" :content="sec" />
  <Social v-else-if="sec.type === 'socialproof'" :content="sec" />
  <Footer v-else-if="sec.type === 'footer'" :content="sec" />
  <!-- <Jumbo v-for="block in wholeBlock.blocks" class="container" :block="wholeBlock.block" /> -->
</template>

<script>
import Jumbo from '~/components/sections/jumbo.vue'
import Generic from '~/components/sections/generic.vue'
import Faq from '~/components/sections/faq.vue'
import Social from '~/components/sections/social.vue'
import Footer from '~/components/sections/footer.vue'

export default {
  props: ['section'],
  data: function() {
    return {
      sec: this.section
    }
  },
  components: {
    Jumbo,
    Generic,
    Faq,
    Social,
    Footer
  }
}
</script>
