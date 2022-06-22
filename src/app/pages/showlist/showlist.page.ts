import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/model/students.model';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.page.html',
  styleUrls: ['./showlist.page.scss'],
})
export class ShowlistPage implements OnInit {

  p: number = 1;
  students:any=[];
  searchCountry: any;
  loading: boolean = false;

  constructor(public _student: StudentService) { }

  ngOnInit() {
    this.loading = true;
    this._student.studentList().subscribe((studentdata)=>{
      this.students = studentdata;
      this.loading = false;
    })

    
    
  }
  fetchdata(){
    this.loading = true;
    this._student.studentList().subscribe((studentdata)=>{
      this.students = studentdata;
      this.loading = false;
    })

  }

  SearchCountryMethod() {
    if (this.searchCountry == "") {
      this.ngOnInit();
    } else {
      this.students = this.students.filter(res => {
        return res.country.toLocaleLowerCase().match(this.searchCountry.toLocaleLowerCase())

      })
    }
  }
 

  
  




}
