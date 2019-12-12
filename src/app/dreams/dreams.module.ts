import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { DreamsRoutingModule } from './dreams-routing.module';
import { DreamsComponent } from './dreams.component';
import { DreamsCreateComponent } from './dreams-create/dreams-create.component';
import { DreamDetailsComponent } from './dream-details/dream-details.component';


@NgModule({
  declarations: [DreamsComponent, DreamsCreateComponent, DreamDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    DreamsRoutingModule
  ]
})
export class DreamsModule { }
