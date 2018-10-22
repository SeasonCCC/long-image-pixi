const index = r => require.ensure([], () => r(require('@/pages/index.vue')), 'index')

const routes = [
  {
    path: '/',
    component: index
  }
]

export default routes
