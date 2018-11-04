<template>
  <Generic v-if="sec.type === 'generic'" :content="sec" />
  <Jumbo v-else-if="sec.type === 'hero'" :content="sec" />
  <!-- <Jumbo v-for="block in wholeBlock.blocks" class="container" :block="wholeBlock.block" /> -->
</template>

<script>
import Jumbo from '~/components/sections/jumbo.vue'
import Generic from '~/components/sections/generic.vue'

export default {
  props: ['section'],
  data: function() {
    return {
      sec: this.section
    }
  },
  components: {
    Jumbo,
    Generic
  }
}
</script>
