import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent  {

  loading:boolean = true;
  nuevasCanciones:any[] = [];

  constructor(private _spotify: SpotifyService) { 
    
    this._spotify.getNewReleases()
    .subscribe( (data:any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      });
      
  }

}
