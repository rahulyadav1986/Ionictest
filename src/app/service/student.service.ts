import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  url:string='http://localhost:3000/students';

  studentList(){
    return this.http.get(this.url)
  }

  addstudentList(students:any){
    return this.http.post(this.url, students)
  }


}
