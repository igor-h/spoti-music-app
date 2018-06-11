import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {

   artistas:any[] = [];
 
  constructor(private _spotify: SpotifyService) {
    console.log("constructor buscador");
  }

  buscar(textoBuscar:string) {
    this._spotify.getArtists(textoBuscar)
    .subscribe( (data:any) => {
        this.artistas = data;
        console.log(this.artistas)
      });
  }
}

