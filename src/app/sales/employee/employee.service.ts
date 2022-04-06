import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.class';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private http: HttpClient) { }

  login(login: string, password: string): Observable<Employee> {
    return this.http.get<Employee>("http://localhost:50020/api/employees/" + `${login}/${password}`)
  }
}
