<template lang="pug">
#content
  .projects 
    .project-item(v-for="project in projects" :key="project.name" data-aos="fade-up") 
      .project-cover-wrapper
        img.project-cover(:src="project.preview" :alt="project.name")
      .project-description
        .project-name {{ project.name }}
        .project-desc {{ project.desc }}

</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        name: 'MoeViewerR',
        desc: 'lorem',
        preview: 'http://placekitten.com/300/300',
      },
      {
        name: 'MoeViewerR',
        desc: 'lorem',
        preview: 'http://placekitten.com/300/300',
      },
    ],
  }),
  methods: {},
}
</script>
<style lang="scss" scoped>
#content {
  // margin-top: calc(-1 * var(--nav-height));

  // background-color: #77428d;
  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .project-item {
      margin: 0;
      width: 0;
      flex: 0 0 280px;
      border-radius: 5px;
      box-shadow: var(--shadow);
      margin: 1rem;

      background-color: rgba($color: white, $alpha: 0.33);
      backdrop-filter: blur(16px);
      overflow: hidden;

      .project-cover-wrapper {
        width: 280px;
        height: 280px;
        overflow: hidden;
        padding: 0.5rem;
        img {
          width: 100%;
          height: 100%;

          object-fit: cover;
        }
      }
      .project-description {
        padding: .5rem;
      }
    }
  }
}
</style>
