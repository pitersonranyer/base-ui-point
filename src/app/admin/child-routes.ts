export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  },
  
  {
    path: 'list',
    loadChildren: () =>
      import('./list/list.module').then(m => m.ListModule),
    data: { icon: 'school', text: 'Cartola' }
  },

  {
    path: 'list',
    loadChildren: () =>
      import('./list/list.module').then(m => m.ListModule),
    data: { icon: 'groups', text: 'Bolão' }
  },

  {
    path: 'pix',
    loadChildren: () =>
      import('./pix/pix.module').then(m => m.PixModule),
      data: { icon: 'monetization_on', text: 'Pix' }
  },
];
