<template>
  <b-container>
    <b-row>
      <b-col v-for="block in sec.blocks" :key="block.id">
        <div v-if="block.image">
          <b-img :src="'http://localhost:1337'+block.image.url" />
        </div>
        <h1>{{ block.title }}</h1>
        <p>{{ block.text }}</p>
        <b-btn variant="primary" href="#" v-if="block.button">{{ block.button.label }}</b-btn>
      </b-col>
    </b-row>
  </b-container>
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
