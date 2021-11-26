import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/core/models/response.models';
import { BaseService } from 'src/app/core/service/baseService.service';
import { OrdersModel } from 'src/app/orders/orders.models';
import { UsuarioModel } from '../core/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class CadOrdersService extends BaseService {

  constructor(private http: HttpClient) { super(); }

  get(): Observable<ResponseModel< UsuarioModel[]>> {
    return this.http.get<ResponseModel<UsuarioModel[]>>(`${this.base_url}/user/info`);
  }

  post(order: OrdersModel): Observable<ResponseModel<OrdersModel>> {
    console.log("CHegou no Post");
    console.log(this.base_url);
    console.log(order);

    return this.http.post<ResponseModel<OrdersModel>>(`${this.base_url}/orders/new`, order);
  }
  /*
  put(usuario: UsuarioModel): Observable<ResponseModel<UsuarioModel>> {
    return this.http.put<ResponseModel<UsuarioModel>>(`${this.base_url}/register`, usuario);
  }

  delete(id: number): Observable<ResponseModel> {
    return this.http.delete<ResponseModel>(`${this.base_url}/v1/empresas/${id}`);
  }

  deleteContato(id: number): Observable<ResponseModel> {
    return this.http.delete<ResponseModel>(`${this.base_url}/v1/empresas/contato/${id}`);
  }
  */

}
