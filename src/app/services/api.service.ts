import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }
  postEmployeeList(data: any){
    return this.http.post<any>('http://localhost:3000/employeeList/',data)
  }
  getEmployeeList(){
    return this.http.get<any>('http://localhost:3000/employeeForm/')
  }
}
