import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { VoituresComponent } from './voitures.component';
import { VoitureListComponent } from './voiture-list/voiture-list.component';
import { VoitureItemComponent } from './voiture-list/voiture-item/voiture-item.component';
import { VoitureStartComponent } from './voiture-start/voiture-start.component';
import { VoitureDetailComponent } from './voiture-detail/voiture-detail.component';
import { VoitureEditComponent } from './voiture-edit/voiture-edit.component';
import { VoituresRoutingModule } from '../voitures-routing.module';



@NgModule({
  declarations: [
    VoituresComponent,
    VoitureListComponent,
    VoitureItemComponent,
    VoitureStartComponent,
    VoitureDetailComponent,
    VoitureEditComponent
  ],
  imports: [
    SharedModule,
    VoituresRoutingModule
  ]
})
export class VoituresModule { }
