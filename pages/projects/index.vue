<template lang="pug">
#content
  .projects 
    .project-item(v-for="(project, index) in projects" :key="index" data-aos="fade-up") 
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
    margin-top: 1rem;

    .project-item {
      position: relative;
      margin: 0;
      width: 0;
      flex: 0 0 20rem;
      // border-radius: 5px;
      box-shadow: var(--shadow);
      margin: 1rem;

      background-color: rgba($color: white, $alpha: 1);
      backdrop-filter: blur(16px);
      overflow: hidden;
      box-shadow: 0 0 1rem rgba($color: #000000, $alpha: .12);
      cursor: pointer;
      // &::before {
      //   content: '';
      //   position: absolute;
      //   right: 0;
      //   bottom: 0;
      //   width: 2rem;
      //   height: 2rem;

      // }
      transition: .5s cubic-bezier(0.075, 0.82, 0.165, 1);
      .project-type {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 3rem;
        height: 3rem;
        &::before {
          content: '';
          position: absolute;
          right: 0;
          bottom: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 0 3rem 3rem;
          border-color: transparent transparent #B980AE transparent;
        }
        i {
          color: white;
          position: absolute;
          right: 0;
          bottom: 0;
          width: 1.6rem;
          height: 1.6rem;
          line-height: 1.6rem;
          font-size: 1.6rem;
          vertical-align: top;
          display: flex;
          align-items: flex-start;
        }
      }
      .project-cover-wrapper {
        width: 100%;
        overflow: hidden;
        padding: 0.5rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .project-description {
        padding: 0.5rem;

        &:hover .project-detail {
          transform: translateY(0);
        }
      }
      .project-detail{
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(100%);
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: .8);
        color: white;
        padding: 1rem;
        transition: .5s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
      &:hover {
        // transform: translateY(-.5rem);
        // .project-detail {
        //   transform: translateY(0);
        // }
      }
    }
  }
}
</style>
