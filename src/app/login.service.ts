import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  // submit(data:any):Observable<any>{
  //   return this.httpClient.post('https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students',data);

  // }
}
