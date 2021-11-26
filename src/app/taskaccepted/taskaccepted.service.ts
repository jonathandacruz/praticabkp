import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskAcceptedModel } from './taskaccepted.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BaseService } from '../core/service/baseService.service';
import { filter } from 'rxjs/operators';
@Injectable()
export class TaskAcceptedService extends BaseService {
  private readonly API_URL = this.base_url + '/orders/info';
  isTblLoading = true;
  dataChange: BehaviorSubject<TaskAcceptedModel[]> = new BehaviorSubject<TaskAcceptedModel[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private http: HttpClient) { super(); }

  get data(): TaskAcceptedModel[] {
    return this.dataChange.value.filter(r => r.orderStatus === 'ACCEPTED' );
  }

  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllTaskAccepteds(): void {
    this.http.get<TaskAcceptedModel[]>(this.API_URL).subscribe(
      (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + ' ' + error.message);
      }
    );
  }
  addTaskAccepted(taskaccepted: TaskAcceptedModel): void {

    null;
  }
  updateTaskAccepted(id: number): void {

    this.http.patch(`${this.base_url}/orders/finish/` + id, id).subscribe(data => {
      alert("Pedido " + id + " finalizado!");
      console.log(id);
      location.reload();
      },
      (err: HttpErrorResponse) => {
        alert("Erro na criação, atualize a pagina e tente novamente");
      }
    );
  }
  deleteTaskAccepted(id: number): void {
     null;
  }
}
