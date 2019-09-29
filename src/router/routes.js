
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), name: 'index' }
    ]
  },
  { path: '/login', component: () => import('pages/Login.vue'), name: 'login' },
  { path: '/granja/:id', component: () => import('pages/Granja/Show.vue'), name: 'granja.show' },
  { 
    path: '/granja/:id_granja/estanque/:id_estanque', 
    component: () => import('pages/Estanque/Show.vue'), 
    name: 'estanque.show' 
  },
  { 
    path: '/crear-semilla/granja/:id_granja/estanque/:id_estanque', 
    component: () => import('pages/Semilla/Create.vue'), 
    name: 'semilla.create' 
  },
  { 
    path: '/crear-alimentacion/granja/:id_granja/estanque/:id_estanque', 
    component: () => import('pages/Alimentacion/Create.vue'), 
    name: 'alimentacion.create' 
  },

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
