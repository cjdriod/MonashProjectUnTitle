export default [
  {
    path: "/user",
    component: () => import("../global/template/BaseTemplate"),
    name: "companyLanding",
    children: [
      {
        path: 'profile',
        component: () => import('./avatar.vue'),
        name: 'avatar',
      }
    ]
  }
];