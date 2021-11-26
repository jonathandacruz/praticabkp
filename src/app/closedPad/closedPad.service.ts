import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ClosePadModel } from './closedPad.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BaseService } from '../core/service/baseService.service';
import { filter } from 'rxjs/operators';
import { ClosePadModule } from './closedPad.module';
@Injectable()
export class ClosePadService extends BaseService {
  private readonly API_URL = this.base_url + '/orderPad/inProgress';
  isTblLoading = true;
  dataChange: BehaviorSubject<ClosePadModel[]> = new BehaviorSubject<ClosePadModel[]>([]);
  reba: Object;
  // Temporarily stores data from dialogs
  dialogData: any;
  task : ClosePadModule;
  constructor(private http: HttpClient) { super(); }

  get data(): ClosePadModel[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllClosePads(): void {
    this.http.get<ClosePadModel[]>(this.API_URL).subscribe(
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
  addClosePad(closepad: ClosePadModel): void {

    null;
  }
  updateClosePad(id: number): void {

    this.http.post(`${this.base_url}/orderPad/close`, id).subscribe(data => {
       console.log("Aqui");
       this.reba = data;
       console.log(this.reba);

       alert("Comanda " + id + " Fechada! O valor total foi de: R$ " + this.reba["paymentAmount"]);
      },
      (err: HttpErrorResponse) => {
        alert("Erro na criação, atualize a pagina e tente novamente");
      }
    );




  }

  deleteClosePad(id: number): void {
    null;
  }
}
