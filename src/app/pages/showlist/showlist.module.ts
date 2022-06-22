import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowlistPageRoutingModule } from './showlist-routing.module';

import { ShowlistPage } from './showlist.page';
import { StudentService } from 'src/app/service/student.service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowlistPageRoutingModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  declarations: [ShowlistPage],
  providers: [StudentService]
  
})
export class ShowlistPageModule {}
