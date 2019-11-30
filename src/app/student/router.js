export default [
  {
    path: "/user",
    component: () => import("../global/template/BaseTemplate"),
    name: "userLanding",
    redirect: { name: "dashboard" },
    children: [
      {
        path: "dashboard",
        component: () => import("./dashboard"),
        name: "dashboard"
      },
      {
        path: "profile",
        component: () => import("./avatar"),
        name: "profile"
      },
      {
        path: "my-task/:bool?",
        component: () => import("./myTask"),
        name: "myTask",
        props: true,
      }
    ]
  }
];
