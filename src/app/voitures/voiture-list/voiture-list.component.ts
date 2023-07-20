import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/model/voiture.model';
import { VoituresService } from 'src/app/voitures.service';

@Component({
  selector: 'app-voiture-list',
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.css']
})
export class VoitureListComponent implements OnInit {
  voitures?: Voiture [];
  constructor(private voitureService :  VoituresService){}
  ngOnInit(): void {
    this.voitureService.getVoitures().subscribe(v => {
      this.voitures=v;
    })
  }
}
