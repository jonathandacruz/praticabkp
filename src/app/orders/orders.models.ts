export class menuOrders{
  menuId:number;
  quantity:number;
}
export class OrdersModel {
   clientId: number;
   employeeId: number;
   restaurantId: number;
  menuOrders: Array<menuOrders[]>;

  constructor(
    orders: {

      clientId?: number;
      employeeId?: number;
      restaurantId?: number;
      menuOrders?: Array<menuOrders[]>;
    } = {}
  ) {
    this.clientId = orders.clientId=0;
    this.employeeId = orders.employeeId=0;
    this.restaurantId = orders.restaurantId=0;
    this.menuOrders   = orders.menuOrders;

  }







}





