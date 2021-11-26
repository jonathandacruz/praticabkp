
export class menuItens{
  menu:number;
  quantity:number;
}
export class TaskModel {
  id: number;
  startDate: Date;
  orderStatus: string;
  client: string;
  employee: string
  menuItens: Array<menuItens[]>;

  constructor(task) {
    {
      this.id = task.id ||'';
      this.startDate = task.startDate || '';
      this.orderStatus = task.orderStatus || '';
      this.client = task.client || '';
      this.employee = task.employee || '';
      this.menuItens.push = task.menuItens||[];
    }
  }







}





