import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DreamsComponent } from './dreams.component';
import { DreamsCreateComponent } from './dreams-create/dreams-create.component';
import { DreamDetailsComponent } from './dream-details/dream-details.component';


const routes: Routes = [
  { path: '', component: DreamsComponent },
  { path: 'create', component: DreamsCreateComponent },
  { path: ':name/details', component: DreamDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DreamsRoutingModule { }
