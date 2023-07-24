import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getstudents(): Observable<any> {
    return this.httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students")
  }
  getstudent(id:number): Observable<any> {
    return this.httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students/"+id)
  }
  studentfilter(data: any): Observable<any> {
    return this.httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students?filter=" + data)
  }
  studentpage(top: any, bottom: any): Observable<any> {
    return this.httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students?limit=" + top + "&page=" + bottom)
  }
  studentsort(asc: any, dsc: any): Observable<any> {
    return this.httpClient.get("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students?sortBy=" + asc + "&order=" + dsc)
  }
  deletestudent(id: any): Observable<any> {
    return this.httpClient.delete("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students/" + id)
  }
  addstudents(data: any): Observable<any> {
    return this.httpClient.post("https://64b8a34b21b9aa6eb07a012b.mockapi.io/api/students-mini/students", data)
  }

}
