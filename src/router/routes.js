// import of Pages
import component1 from '@/components/component1.vue'
import component2 from '@/components/component2.vue'

const routes = [
  /* {
    path: '*',
    component: OrderManagment,
    name: 'orderManagment'
  },
  {
    path: '/',
    component: OrderManagment,
    name: 'orderManagment'
  },
  {
    path: '/modificar-pedido/:id',
    component: ModifyOrder,
    name: 'ModifyOrder'
  } */
  {
    path: '/component1/',
    component: component1,
    name: 'component1'
  },
  {
    path: '/component2/',
    component: component2,
    name: 'component2'
  }
]

export default routes
