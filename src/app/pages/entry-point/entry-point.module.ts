import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntryPointPageRoutingModule } from './entry-point-routing.module';

import { EntryPointPage } from './entry-point.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntryPointPageRoutingModule
  ],
  declarations: [EntryPointPage]
})
export class EntryPointPageModule {}
