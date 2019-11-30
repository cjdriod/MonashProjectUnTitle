export default [
  {
    path: "/user",
    component: () => import("../global/template/BaseTemplate"),
    name: "userLanding",
    redirect: { name: 'dashboard' },
    children: [
      {
        path: 'dashboard',
        component: () => import('./dashboard'),
        name: 'dashboard',
      },
      {
        path: 'profile',
        component: () => import('./avatar.vue'),
        name: 'avatar',
      }
    ]
  }
];
