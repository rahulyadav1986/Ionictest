import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private network: Network, public altController: AlertController, public router: Router) {
    window.addEventListener('offline', ()=>{
      this.openAlert();
    });
    window.addEventListener('online', ()=>{
      this.closeAlert();
    })    
  }
  async openAlert(){
    const alert = await this.altController.create({
      header: "Check Your Internet Connection",
      message: "You are in Offline, Please Connect you Internew",
      cssClass: 'my-custom-class',
      buttons: [{
        text: "Ok",
        handler: ()=>{
          this.router.navigateByUrl['/']
        }
      }]
      
    });
    await alert.present();
  }

  async closeAlert(){
    const alertClose = await this.altController.create({
      header: "Connection Established",
      message: "You are in Online",
      cssClass: 'my-custom-class2',
      buttons: [{
        text: "Ok",
        handler: ()=>{
          this.router.navigateByUrl['/']
        }
      }]
      
    });
    await alertClose.present();
  }
 
}
