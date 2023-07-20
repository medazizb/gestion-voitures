import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoitureDetailComponent } from './voitures/voiture-detail/voiture-detail.component';
import { VoitureStartComponent } from './voitures/voiture-start/voiture-start.component';
import { VoitureEditComponent } from './voitures/voiture-edit/voiture-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'voitures',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
