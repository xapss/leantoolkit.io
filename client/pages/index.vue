<template>
  <section class="container">
    <div class="row">
      <div class="col-md-12">
        <ul class="card-columns list-unstyled">
          <li v-for="section in sections" :key="section.id" class="card">
            <p>{{ section.blocks }}</p>
            <Block v-for="block in section.blocks" :key="block.id" v-bind:block="block" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)

import Block from '~/components/block.vue'
import Jumbo from '~/components/blocks/jumbo.vue'
import Generic from '~/components/blocks/generic.vue'

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
    Block,
    Jumbo
  }
}
</script>
