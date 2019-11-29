export default {
  path: '/company',
  components: () => import('../global/template/BaseTemplate'),
  name: 'companyLanding',
  redirect: { name: '' },
  children: [
    {
      path: '',
      components: () => import(''),
      name: '',
    }
  ]
}
