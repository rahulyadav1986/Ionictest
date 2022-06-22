import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  students:any=[];
  addstudent = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
      
    phone: new FormControl(''),
    country: new FormControl(''),
    zipCode: new FormControl(''),
    upload: new FormControl(''),
    address: new FormControl('')
  })
  constructor(public _student: StudentService, private route: Router) { }

  ngOnInit() {
  }

  saveData(){    
    this._student.addstudentList(this.addstudent.value).subscribe((res)=>{
      console.log(res)
    });
    this.route.navigateByUrl('/showlist')
    
  }
  

}
