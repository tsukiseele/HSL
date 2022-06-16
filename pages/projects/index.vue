<template lang="pug">
#content
  .projects
    .project-classify(v-for="(projectClassify, index) in projects" :key="index")
      .project-classify-name {{ projectClassify.name }}
      .project-list
        .project-item(v-for="(project, i) in projectClassify.items" :key="i" data-aos="fade-up") 
          .project-cover-wrapper
            img.project-cover(:src="project.preview" :alt="project.name")
          .project-description
            .project-name {{ project.name }}
            .project-desc {{ project.desc }}
            .project-detail
              span Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, ipsum voluptatibus. Nihil excepturi placeat sed esse quisquam minus deleniti facere aspernatur minima corrupti, magni libero, laboriosam, fugit laudantium doloremque amet.
          .project-type
            SIcon(name="mdi-github")
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        name: 'Projects',
        items: [
          {
            name: 'MoeViewerR',
            desc: 'lorem',
            detail: '',
            preview: 'http://placekitten.com/300/300',
          },
          {
            name: 'MoeViewerN',
            desc: 'lorem',
            detail: '',
            preview: 'http://placekitten.com/300/300',
          },
          {
            name: 'MoeViewerR',
            desc: 'lorem',
            detail: '',
            preview: 'http://placekitten.com/300/300',
          },
          {
            name: 'MoeViewerN',
            desc: 'lorem',
            detail: '',
            preview: 'http://placekitten.com/300/300',
          },
          {
            name: 'MoeViewerR',
            desc: 'lorem',
            detail: '',
            preview: 'http://placekitten.com/300/300',
          },
          {
            name: 'MoeViewerN',
            desc: 'lorem',
            detail: '',
            preview: 'http://placekitten.com/300/300',
          },
        ],
      },
      {
        name: 'Web Sites',
        items: [
          {
            name: 'MoeViewerR',
            desc: 'lorem',
            detail: '',
            preview: 'http://placekitten.com/300/300',
          },
          {
            name: 'MoeViewerN',
            desc: 'lorem',
            detail: '',
            preview: 'http://placekitten.com/300/300',
          },
        ],
      },
    ],
  }),
  methods: {},
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
