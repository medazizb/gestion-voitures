import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from 'src/app/model/voiture.model';
import { VoituresService } from 'src/app/voitures.service';

@Component({
  selector: 'app-voiture-detail',
  templateUrl: './voiture-detail.component.html',
  styleUrls: ['./voiture-detail.component.css']
})
export class VoitureDetailComponent implements OnInit{
  voiture? : Voiture;

  constructor(private voitureService: VoituresService,
              private router: Router,
              private route: ActivatedRoute) { }
  ngOnInit(): void {
    
    this.route.data.subscribe(
      (data)=>this.voiture=data['voiture']
    );

  }

}
