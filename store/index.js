import { formatPost, formatJson, formatNavMenu, formatGallery, formatTimeline, formatPage } from '@/plugins/utils/format.js'
import config from '@/config.js'

export const state = () => ({
  archive: {
    page: 0,
    totalCount: 0,
    items: [],
    currentItem: {},
  },
  clientWidth: 0,
  scroll: { pos: 0, change: 0 },
  images: [],
  inspiration: [],
  about: {},
  friends: [],
  projects: [],
  labels: [],
  categorys: null,
  timeline: [],
  experience: null,
  navigation: config.nav,
})

export const getters = {
  breakpoints(state, size) {
    const breakpoints = {
      tablet: 760,
      mobile: 480,
    }
    return breakpoints[size] && breakpoints[size] < state.clientWidth
  },
  scroll(state) {
    return state.scroll
  },
  clientWidth(state) {
    return state.clientWidth
  },
  isMobile(state) {
    return state.clientWidth < 768
  },
  archives(state) {
    return state.archives
  },
}

export const mutations = {
  archive(state, args) {
    args instanceof Array ? (state.archive[args[0]] = args[1]) : (state.archive = args)
  },
  //
  scroll(state, scroll) {
    state.scroll = scroll
  },
  clientWidth(state, clientWidth) {
    state.clientWidth = clientWidth
  },
  labels(state, labels) {
    state.labels = labels
  },
  categorys(state, categorys) {
    state.categorys = categorys
  },
  images(state, images) {
    state.images = images
  },
  inspiration(state, inspiration) {
    state.inspiration = inspiration
  },
  about(state, about) {
    state.about = about
  },
  friends(state, friends) {
    state.friends = friends
  },
  timeline(state, timeline) {
    state.timeline = timeline
  },
  projects(state, projects) {
    state.projects = projects
  },
  experience(state, experience) {
    state.experience = experience
  },
}

export const actions = {
  /**
   * 获取与
   * @param {Context} context 上下文
   * @param {Object} params 分页参数
   * @returns {Array<Archive>} 文章列表
   */
  async archives({ commit, state }, { page, count }) {
    if (state.archive.page === page) return
    const result = await this.$service.getArchives({ page, count })
    if (result) {
      const totalCount = result.total_count
      commit('archive', { page, totalCount, items: result.items.map((item) => formatPost(item)), currentItem: null })
    }
  },
  /**
   * 通过id获取文章
   * @param {Context} context 上下文
   * @param {Object} id 文章id
   */
  async archive({ commit, state }, { id }) {
    let archive = null
    // 先从缓存里面找
    if (state.archive.items) {
      archive = state.archive.items.find((item) => item.id == id)
    }
    // 如果没有找到就请求
    commit('archive', ['currentItem', archive || formatPost(await this.$service.getArchiveById(id))])
  },
  /**
   *
   * @param {*} param0
   * @returns
   */
  async images({ commit, state }) {
    if (state.images.length > 0) return
    commit('images', [].concat(...(await this.$service.getArchives({ page: 1, count: 99 })).map((item) => formatGallery(item))).slice(0, 20))
  },
  /**
   * 获取时间线
   * @param {*} param0
   * @returns
   */
  async timeline({ commit, state }) {
    if (state.timeline.length) return
    const timeline = formatTimeline(await this.$service.getArchives({ page: 1, count: 99 }))
    commit('timeline', timeline)
  },
  /**
   * 获取标签列表
   * @param {Context} context 上下文
   */
  async labels({ commit, state }) {
    if (state.labels.length) return
    // 如果没有找到就请求
    commit('labels', await this.$service.getLabels())
  },
  /**
   * 获取分类列表
   * @param {Context} context 上下文
   */
  async categorys({ commit, state }) {
    if (state.categorys) return
    commit('categorys', await this.$service.getMilestones())
  },
  /**
   *
   * @param {*} param0
   * @param {*} param1
   */
  async inspiration({ commit, state }, { page, count }) {
    commit('inspiration', formatInspiration(await this.$service.getInspiration({ page, count })))
  },
  /**
   * 获取关于
   * @param {*} param0
   */
  async about({ commit, state }) {
    if (state.about.length) return
    const about = await this.$service.getPage('about')
    if (about && about[0]) {
      commit('about', formatPage(about[0], 'about'))
    }
  },
  /**
   * 获取友链
   */
  async friends({ commit, state }) {
    if (state.friends) return
    const friends = await this.$service.getPage('friend')
    if (friends && friends[0]) {
      commit('friends', formatPage(friends[0], 'friend'))
    }
  },
  /**
   * 获取项目
   */
  async projects({ commit, state }) {
    if (state.projects.length) return
    const projects = (await Promise.all([this.$service.getPage('projects'), this.$service.getPage('websites')])).map((item) => item[0])
    commit(
      'projects',
      projects.map((item) => {
        const name = item.title.toLowerCase()
        return { name, items: formatPage(item, item.title.toLowerCase()) }
      })
    )
  },
  /**
   *
   * @param {*} param0
   * @returns
   */
  async experience({ commit, state }) {
    if (state.experience) return
    const experience = await this.$service.getPage('experience')
    if (experience && experience[0]) {
      commit('experience', formatJson(experience[0]))
    }
  },
}
