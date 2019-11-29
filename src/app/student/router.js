export default {
  path: '/user',
  components: () => import('../global/template/BaseTemplate'),
  name: 'userLanding',
  redirect: { name: '' },
  children: [
    {
      path: '',
      components: () => import(''),
      name: '',
    }
  ]
}
