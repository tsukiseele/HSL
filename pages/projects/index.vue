<template lang="pug">
#content
  .projects 
    .project-item.card(v-for="project in projects" :key="project.name" data-aos="fade-up") 
      .project-name {{ project.name }}
      .project-desc {{ project.desc }}
      img.project-cover(:src="project.preview" :alt="project.name")

</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        name: 'MoeViewerR',
        desc: 'lorem',
        preview: ''
      },
      {
        
        name: 'MoeViewerR',
        desc: 'lorem',
        preview: ''
      }
    ]
  }),
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
#content {
  margin-top: calc(-1 * var(--nav-height));
  
  .projects {
    .project-item {
      margin: 0;
      height: 100vh;
    }
  }
}
</style>