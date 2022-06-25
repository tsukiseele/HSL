import config from '@/config.js'

const token = config.token
const username = config.blog.username
const repository = config.blog.repository

export default ({ app, $axios }, inject) => {
  $axios.defaults.headers.common['Authorization'] = `token ${Buffer.from(token, 'base64').toString('ascii')}`
  $axios.defaults.baseURL = `https://api.github.com/repos/${username}/${repository}`;
  
  inject('service', {
    getArchives({ page, count }) {
      return $axios.$get(`https://api.github.com/search/issues?q=repo:${username}/${repository}+type:issue+state:open&page=${page}&per_page=${count}`)
      // return $axios.$get(`/issues`, {
      //   params: {
      //     page: page,
      //     per_page: count,
      //     state: 'open'
      //   }
      // })
    },
    getArchiveById(id) {
      return $axios.$get(`/issues/${id}?state=open`)
    },
    getLabels() {
      return $axios.$get(`/labels`)
    },
    getMilestones() {
      return $axios.$get(`/milestones`)
    },
    getPage(type) {
      const upperType = type.replace(/^\S/, s => s.toUpperCase())
      return $axios.$get(`/issues?state=closed&labels=${upperType}`)
    },
    getInspiration({ page, count }) {
      return $axios.$get(`/issues?state=closed&labels=inspiration&page=${page}&per_page=${count}`)
    },
  })
}
