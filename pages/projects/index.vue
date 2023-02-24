<template lang="pug">
#content
  .projects
    .project-classify(v-for="(projectClassify, index) in projects" :key="index")
      .project-classify-name {{ projectClassify.name }}
      .project-list
        .project-item(v-for="(project, i) in projectClassify.items" :key="i" @click="onItemClick(project)") 
          .project-cover-wrapper
            img.project-cover(v-lazy="project.cover" :alt="project.name")
          .project-description
            .project-name {{ project.name }}
            .project-desc {{ project.desc }}
            .project-detail
              span {{ project.desc }}
          .project-type
            SIcon(v-if="project.type == 'github'" name="github")
            SIcon(v-else-if="project.type == 'website'" name="website")
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({}),
  computed: {
    ...mapState(['projects']),
  },
  methods: {
    onItemClick(item) {
      item && item.link && window.open(item.link, '_blank')
    },
  },

  async fetch({ store, params }) {
    await store.dispatch('projects')
  },
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
