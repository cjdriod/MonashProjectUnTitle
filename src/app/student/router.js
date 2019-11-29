export default [
  {
    path: "/user",
    component: () => import("../global/template/BaseTemplate"),
    name: "userLanding"
    // redirect: { name: '' },
    // children: [
    //   {
    //     path: '',
    //     components: () => import(''),
    //     name: '',
    //   }
    // ]
  }
]
