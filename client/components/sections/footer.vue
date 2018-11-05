<template>
  <b-container fluid tag="footer" :data-name="sec.name" :data-type="sec.type">
    <b-container class="footer-top">
      <b-row>
        <b-col v-for="block in sec.blocks" :key="block.id">
          <!-- <div v-if="block.image" class="image-placeholder">
            <b-img :src="'http://localhost:1337'+block.image.url" :alt="block.title" class="img-fluid"/>
          </div> -->
          <h2 v-html="$md.renderInline(block.title)"></h2>
          <p v-html="$md.renderInline(block.text)"></p>
          <b-btn variant="primary" href="#" v-if="block.button">{{ block.button.label }}</b-btn>
        </b-col>
      </b-row>
    </b-container>
    <hr />
    <b-container class="footer-bottom">
      <b-row>
        <b-col>
          <p>
            Company name<br />
            Johan Huizingalaan 763a<br />
            1066 VH Amsterdam
          </p>
        </b-col>
        <b-col>
          <ul>
            <li>Privacy statement</li>
            <li>Cookie statement</li>
            <li>Data settings</li>
          </ul>
        </b-col>
        <b-col>
          <p>Company name Copyrights &copy; 2018</p>
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
