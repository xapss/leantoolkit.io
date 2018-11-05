<template>
  <b-jumbotron fluid tag="section" :data-name="sec.name" :data-type="sec.type">
    <h1 class="display-3" v-html="$md.renderInline(sec.blocks[0].title)"></h1>
    <p class="lead" v-html="$md.renderInline(sec.blocks[0].text)"></p>
    <b-btn variant="primary" size="lg" href="#" v-if="sec.blocks[0].button.label">{{ sec.blocks[0].button.label }}</b-btn>
  </b-jumbotron>
</template>


<script>
export default {
  props: ['content'],
  data: function() {
    return {
      sec: this.content
    }
  }
}
</script>
