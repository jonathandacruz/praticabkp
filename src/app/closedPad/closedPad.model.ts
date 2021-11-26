
export class orders{
  orderStatus:string;
  client:string;

}
export class ClosePadModel {
  id: number;
  openDateTime: Date;
  paymentAmount: Float32Array;
  orders: Array<orders[]>;

  constructor(closepad) {
    {
      this.id = closepad.id ||'';
      this.openDateTime = closepad.openDateTime || '';
      this.paymentAmount = closepad.paymentAmount || '';
      this.orders.push = closepad.orders||[];
    }
  }







}





