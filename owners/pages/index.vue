<template>
  <div>
    <b-container fluid tag="section">
      <b-container>
        <b-row class="">
          <b-col>
            <h1>Value Proposition</h1>
            <b-container fluid>
              <b-row class="my-1">
                <b-col sm="3"><label for="valueprop1">Value proposition</label></b-col>
                <b-col sm="9"><b-form-input type="input"></b-form-input></b-col>
              </b-row>
              <b-row class="my-1">
                <b-col sm="3"><label for="valueprop1">Subtitle</label></b-col>
                <b-col sm="9"><b-form-textarea></b-form-textarea></b-col>
              </b-row>
              <b-row class="my-1">
                <b-col sm="3"><label for="valueprop1">Image</label></b-col>
                <b-col sm="9"><b-form-textarea></b-form-textarea></b-col>
              </b-row>
              <b-row class="my-1">
                <b-col sm="3"><label for="valueprop1">CTA button</label></b-col>
                <b-col sm="9"><b-form-textarea></b-form-textarea></b-col>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <div>
      <ul>
        <li v-for="section in sections" :key="section.rank">
          <p>{{section.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)

export default {
  data() {
    return {
      query: ''
    }
  },
  computed: {
    sections() {
      return this.$store.getters['sections/list']
    }
  },
  async fetch({ store }) {
    store.commit('sections/emptyList')
    const response = await strapi.request('post', '/graphql', {
      data: {
        query: `query {
            sections {
              name
              rank
            }
          }
          `
      }
    })
    response.data.sections.forEach(section => {
      store.commit('sections/add', {
        id: section.id || section._id,
        ...section
      })
      store.commit('sections/sort')
    })
  }
}
</script>
