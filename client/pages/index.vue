<template>
  <div>
    <Section v-for="section in sections" :key="section.id" :section="section" />
  </div>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)

import Section from '~/components/section.vue'

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
              type
              name
              blocks {
                title
                text
                image {
                  url
                }
                button {
                  label
                }
              }
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
    })
  },
  components: {
    Section
  }
}
</script>
