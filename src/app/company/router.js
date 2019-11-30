export default [
  {
    path: "/company",
    component: () => import("../global/template/BaseTemplateComp"),
    name: "companyLanding",
    redirect: { name: 'CompanyDashboard' },
    children: [
      {
        path: 'dashboard',
        component: () => import('../company/task-componenet/CompanyDashboard'),
        name: 'CompanyDashboard',
      },
      {
        path: "company-detail",
        name: "CompanyDetail",
        component: () => import("./task-componenet/CompanyDetails")
      },
      {
        path: "manage-task",
        name: "ManageTask",
        component: () => import("./task-componenet/TaskManage")
      }
    ]
  }
];
