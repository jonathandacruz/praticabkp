import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskModel } from './task.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BaseService } from '../core/service/baseService.service';
import { filter } from 'rxjs/operators';
@Injectable()
export class TaskService extends BaseService {
  private readonly API_URL = this.base_url + '/orders/info';
  isTblLoading = true;
  dataChange: BehaviorSubject<TaskModel[]> = new BehaviorSubject<TaskModel[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private http: HttpClient) { super(); }

  get data(): TaskModel[] {
    return this.dataChange.value.filter(r => r.orderStatus === 'OPENED' );
  }

  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllTasks(): void {
    this.http.get<TaskModel[]>(this.API_URL).subscribe(
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
  addTask(task: TaskModel): void {

    null;
  }
  updateTask(id: number): void {

    this.http.patch(`${this.base_url}/orders/accept/` + id, id).subscribe(data => {
      alert("Pedido " + id + " aceito!");
      console.log(id);
      },
      (err: HttpErrorResponse) => {
        alert("Erro na criação, atualize a pagina e tente novamente");
      }
    );
  }
  acceptTask(id: number): void {

    this.http.patch(`${this.base_url}/orders/finish/` + id, id).subscribe(data => {
      alert("Pedido " + id + " finalizado!");
      console.log(id);
      },
      (err: HttpErrorResponse) => {
        alert("Erro na criação, atualize a pagina e tente novamente");
      }
    );
  }


  deleteTask(id: number): void {
    this.http.patch(`${this.base_url}/orders/reject/` + id, id).subscribe(data => {
      alert("Pedido " + id + " recusado!");
      },
      (err: HttpErrorResponse) => {
        alert("Erro na criação, atualize a pagina e tente novamente");
      }
    );
  }
}
