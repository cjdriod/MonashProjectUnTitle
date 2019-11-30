export default [
  {
    path: "/company",
    component: () => import("../global/template/BaseTemplateComp"),
    name: "companyLanding",
    // redirect: { name: '' },
    children: [
      {
        path: 'dashboard',
        components: () => import('../company/task-componenet/CompanyDashboard'),
        name: 'CompanyDashboard',
      },
      {
        path: "company-detail",
        name: "CompanyDetail",
        component: () => import("./task-componenet/CompanyDetails")
      }
    ]
  }
];
