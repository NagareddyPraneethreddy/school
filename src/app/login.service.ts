import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient: HttpClient) { }

  createLogin(data: any): Observable<any> {
    return this.httpClient.post("https://reqres.in/api/login", data)
  }
}
