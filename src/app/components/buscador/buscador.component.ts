import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';  //Heroe clase
import { Heroe } from '../../models/heroe.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = [];
  textoBuscar:string;


  constructor(private _heroesService:HeroesService,
              private activatedRoute:ActivatedRoute,){
      console.log("constructor buscador");

  }

  ngOnInit() {
      this.activatedRoute.params.subscribe( params =>{
          this.heroes = this._heroesService.buscarHeroes( params['textoBuscar'] );
          this.textoBuscar = params['textoBuscar'];
      })
  }
}
