import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'MENUITEMS.MAIN.TEXT',
    moduleName: '',
    icon: '',
    class: '',
    groupTitle: true,
    submenu: []
  },
  {
    path: '',
    title: 'MENUITEMS.HOME.TEXT',
    moduleName: 'dashboard',
    icon: 'fas fa-tachometer-alt',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: 'dashboard/main',
        title: 'Pagina Inicial',
        moduleName: 'dashboard',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }

    ]
  },
  {
    path: 'task',
    title: 'Pedidos Pendentes',
    moduleName: 'Pedidos Pendetes',
    icon: 'fas fa-tasks',
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: 'taskaccepted',
    title: 'Pedidos em Andamento',
    moduleName: 'Pedidos em Andamento',
    icon: 'fas fa-tasks',
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: 'contacts',
    title: 'Fornecedores',
    moduleName: 'Fornecedor',
    icon: 'far fa-address-card',
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: 'orders',
    title: 'Fazer Pedido',
    moduleName: 'Fazer Pedido',
    icon: 'fas fa-mail-bulk',
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: 'closePad',
    title: 'Fechar Comanda',
    moduleName: 'Fechar Comanda',
    icon: 'fas fa-mail-bulk',
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: 'items',
    title: 'Itens',
    moduleName: 'Itens',
    icon: 'fas fa-mail-bulk',
    class: '',
    groupTitle: false,
    submenu: []
  },


];
