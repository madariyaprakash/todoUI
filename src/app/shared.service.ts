import { Injectable } from '@angular/core';

// import the observable and httpclient module
import {HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

// import observable which handles synchronus requests/responses
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'http://127.0.0.1:8000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  // adding the http client in constructor
  constructor(private http:HttpClient) { }

  // get list of tasks
  getTaskList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/task-list/');
  }

  // create task
  addTask(val:any){
    return this.http.post(this.APIUrl + '/task-create/', val);
  }

  // Update task
  updateTask(id:any, data:any): Observable<any> {
    let API_URL = `${this.APIUrl}/task-update/${id}/`;
    return this.http.post(API_URL, data, { headers: this.headers });
  }

  // Delete task
  deleteTask(id:any){
    var API_URL = `${this.APIUrl}/task-delete/${id}/`;
    return this.http.post(API_URL, id);
  }
}
