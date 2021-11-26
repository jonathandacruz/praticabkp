import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response.models';
import { BaseService } from './baseService.service';
import { FornecedorModel } from '../models/fornecedor.model';


@Injectable({
  providedIn: 'root'
})
export class CadFornecedorService extends BaseService {

  constructor(private http: HttpClient) { super(); }
/*
  get(): Observable<ResponseModel< UsuarioModel[]>> {
    return this.http.get<ResponseModel<UsuarioModel[]>>(`${this.base_url}/info`);
  }
*/
  post(fornecedor: FornecedorModel): Observable<ResponseModel<FornecedorModel>> {
    console.log("CHegou no Post");
    console.log(this.base_url);
    console.log(fornecedor);

    return this.http.post<ResponseModel<FornecedorModel>>(`${this.base_url}/user/signup`, fornecedor);
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
