import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  // heroes:Heroe[] = [];
  // textoBuscar:string;

//   constructor(private _heroesService:HeroesService,
//     private activatedRoute:ActivatedRoute,){
// console.log("constructor buscador");

// }
  constructor() {
    console.log("constructor buscador");

  }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(params => {
    //   this.heroes = this._heroesService.buscarHeroes(params['textoBuscar']);
    //   this.textoBuscar = params['textoBuscar'];
    // })
  }

}

