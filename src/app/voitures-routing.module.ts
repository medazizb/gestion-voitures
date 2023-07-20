import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { VoitureStartComponent } from './voitures/voiture-start/voiture-start.component';
import { VoitureEditComponent } from './voitures/voiture-edit/voiture-edit.component';
import { VoitureDetailComponent } from './voitures/voiture-detail/voiture-detail.component';
import { VoituresComponent } from './voitures/voitures.component';
import { voitureResolver } from './voitures/voiture.resolver';


const VoituresRoutes: Routes = [
  {
    path:'voitures',
    component:VoituresComponent,
    children: [
      {path:'',component:VoitureStartComponent},
      {path:'new',component:VoitureEditComponent},
      {path:':id',component:VoitureDetailComponent,
      resolve : voitureResolver
      },
      {path:'/edit/:id',component:VoitureEditComponent,
      resolve : voitureResolver
      }
    ]
  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(VoituresRoutes)
  ],
  exports:[
    [ RouterModule]
  ]
})
export class VoituresRoutingModule { }
