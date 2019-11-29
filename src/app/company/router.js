export default [
  {
    path: "/company",
    component: () => import("../global/template/BaseTemplate"),
    name: "companyLanding"
    // redirect: { name: '' },
    // children: [
    //   {
    //     path: '',
    //     components: () => import(''),
    //     name: '',
    //   }
    // ]
  }
];
