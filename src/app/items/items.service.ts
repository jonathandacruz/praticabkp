import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Items } from './items.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BaseService } from '../core/service/baseService.service';
@Injectable()
export class ItemsService extends BaseService {
  private readonly API_URL = this.base_url + '/items/info';
  isTblLoading = true;
  dataChange: BehaviorSubject<Items[]> = new BehaviorSubject<Items[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private http: HttpClient) { super(); }
  get data(): Items[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllItemss(): void {
    this.http.get<Items[]>(this.API_URL).subscribe(
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
  addItems(items: Items): void {


      this.http.post(`${this.base_url}/items/new`, items).subscribe(data => {
      this.dialogData = items;
      },
      (err: HttpErrorResponse) => {
        alert("Erro na criação, atualize a pagina e tente novamente");
    });
  }
  updateItems(items: Items): void {
    null;

    /* this.httpClient.put(this.API_URL + items.id, items).subscribe(data => {
      this.dialogData = items;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteItems(id: number): void {
    null;
  }
}
