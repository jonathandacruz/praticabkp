import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  protected base_url = environment.apiUrl;

  constructor() { }
}
