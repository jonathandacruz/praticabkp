import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response.models';
import { BaseService } from './baseService.service';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class CadUsuarioService extends BaseService {

  constructor(private http: HttpClient) { super(); }
/*
  get(): Observable<ResponseModel< UsuarioModel[]>> {
    return this.http.get<ResponseModel<UsuarioModel[]>>(`${this.base_url}/info`);
  }
*/
  post(usuario: UsuarioModel): Observable<ResponseModel<UsuarioModel>> {
    console.log("CHegou no Post");
    console.log(this.base_url);
    console.log(usuario);

    return this.http.post<ResponseModel<UsuarioModel>>(`${this.base_url}/user/signup`, usuario);
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
