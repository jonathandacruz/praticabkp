import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contacts } from './contacts.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BaseService } from '../core/service/baseService.service';
@Injectable()
export class ContactsService extends BaseService {
  private readonly API_URL = this.base_url + '/suppliers/info';
  isTblLoading = true;
  dataChange: BehaviorSubject<Contacts[]> = new BehaviorSubject<Contacts[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private http: HttpClient) { super(); }
  get data(): Contacts[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllContactss(): void {
    this.http.get<Contacts[]>(this.API_URL).subscribe(
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
  addContacts(contacts: Contacts): void {


      this.http.post(`${this.base_url}/suppliers/new`, contacts).subscribe(data => {
      this.dialogData = contacts;
      },
      (err: HttpErrorResponse) => {
        alert("Erro na criação, atualize a pagina e tente novamente");
    });
  }
  updateContacts(contacts: Contacts): void {
    null;

    /* this.httpClient.put(this.API_URL + contacts.id, contacts).subscribe(data => {
      this.dialogData = contacts;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteContacts(id: number): void {
    console.log(id);

    this.http.patch(`${this.base_url}/suppliers/disable/` + id, id).subscribe(data => {
      console.log(id);
      },
      (err: HttpErrorResponse) => {
        alert("Erro na criação, atualize a pagina e tente novamente");
      }
    );
  }
}
