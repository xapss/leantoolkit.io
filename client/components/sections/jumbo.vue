<template>
  <b-jumbotron>
    <template slot="header">
      {{ sec.blocks[0].title }}
    </template>
    <template slot="lead">
      {{ sec.blocks[0].text }}
    </template>
    <b-btn variant="primary" href="#" v-if="sec.blocks[0].button.label">{{ sec.blocks[0].button.label }}</b-btn>
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
