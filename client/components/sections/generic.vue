<template>
  <b-container fluid tag="section" :data-name="sec.name" :data-type="sec.type">
    <b-container>
      <b-row v-if="sec.title" class="introduction preamble">
        <b-col>
          <h2 v-html="$md.renderInline(sec.title)"></h2>
          <p v-if="sec.introduction" v-html="$md.renderInline(sec.introduction)" class="lead"></p>
        </b-col>
      </b-row>
      <b-row>
        <b-col v-for="block in sec.blocks" :key="block.id">
          <!-- <div v-if="block.image" class="image-placeholder">
            <b-img :src="'http://localhost:1337'+block.image.url" :alt="block.title" class="img-fluid"/>
          </div> -->
          <h3 v-html="$md.renderInline(block.title)"></h3>
          <p v-html="$md.renderInline(block.text)"></p>
          <b-btn variant="primary" href="#" v-if="block.button">{{ block.button.label }}</b-btn>
        </b-col>
      </b-row>
    </b-container>
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
