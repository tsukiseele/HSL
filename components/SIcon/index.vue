<template lang="pug">
i(v-if="name" :class='`mdi ${name}`', aria-hidden='true')
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null
    },
  },
  methods: {},
}
</script>
