import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../models/heroe.models';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  hero: Heroe;

  constructor( private activatedRoute:ActivatedRoute,
               private _heroeService: HeroesService) { 
    
    this.activatedRoute.params.subscribe( params => {
      console.log(params);
      this.hero = _heroeService.getHero(params.id);
      console.log(this.hero);
    })

  }

  ngOnInit() {
  }

}
