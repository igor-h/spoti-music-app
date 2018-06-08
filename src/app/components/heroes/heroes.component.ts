import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';  //Heroe clase
import { Router } from '@angular/router';
import { Heroe } from '../../models/heroe.models';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroesService:HeroesService,
              private router:Router){
    console.log("constructor...");
  }

  ngOnInit() {
     this.heroes = this._heroesService.getHeroes();
     console.log( this.heroes );
  }

  openHeroe( idx:number ){
    this.router.navigate( ['/heroe', idx] );
  }

}
