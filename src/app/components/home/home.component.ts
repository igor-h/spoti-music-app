import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent  {

  loading:boolean;
  nuevasCanciones:any[] = [];

  error: boolean;
  mensajeError: string;

  constructor(private _spotify: SpotifyService) { 
    
    this.loading = true;
    this.error = false;
    
    this._spotify.getNewReleases()
    .subscribe( (data:any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      }, ( errorService:any ) => {
        this.loading = false;
        this.error = true;
        console.log(errorService);
        this.mensajeError = errorService.error.error.message;

      });
      
  }

}
