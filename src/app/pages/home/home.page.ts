import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { AlertController } from '@ionic/angular';
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
  constructor(public _student: StudentService, private route: Router, public altController: AlertController, private network: Network ) { 
    window.addEventListener('offline', ()=>{
      this.internetConnectionoff();
    });
  }

  ngOnInit() {
  }

  saveData(){    
    this._student.addstudentList(this.addstudent.value).subscribe((res)=>{
      console.log(res)
    });
    this.route.navigateByUrl('/showlist')
    
  }

  async internetConnectionoff(){
    const alert = await this.altController.create({
      header: "Check Your Internet Connection",
      message: "You are in Offline, Please Connect you Internew",
      cssClass: 'my-custom-class',
      buttons: [{
        text: "Ok",
        handler: ()=>{
          this.route.navigateByUrl['/']
        }
      }]
      
    });
    await alert.present();
  }
  

}
