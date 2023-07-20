import { inject } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { ResolveFn } from '@angular/router';
import { VoituresService } from '../voitures.service';
import { EMPTY } from 'rxjs';


export const voitureResolver: ResolveFn<Voiture> = (route, state) => {
  let id=route.paramMap.get('id');
  
  if(id!=null){
    
    return inject(VoituresService).getVoiture(+id);
  }
  else{
    return EMPTY;
  }
};
