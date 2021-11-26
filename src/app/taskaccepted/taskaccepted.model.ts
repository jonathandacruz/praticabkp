
export class menuItens{
  menu:number;
  quantity:number;
}
export class TaskAcceptedModel {
  id: number;
  startDate: Date;
  orderStatus: string;
  client: string;
  employee: string
  menuItens: Array<menuItens[]>;

  constructor(taskaccepted) {
    {
      this.id = taskaccepted.id ||'';
      this.startDate = taskaccepted.startDate || '';
      this.orderStatus = taskaccepted.orderStatus || '';
      this.client = taskaccepted.client || '';
      this.employee = taskaccepted.employee || '';
      this.menuItens.push = taskaccepted.menuItens||[];
    }
  }







}





