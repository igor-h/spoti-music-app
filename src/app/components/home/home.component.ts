import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any[] = [];

  constructor(private _spotiserv: SpotifyService) { 
    this._spotiserv.getNewReleases()
    .subscribe( (data:any) => {
      this.nuevasCanciones = data.albums.items;
      });
  }

  ngOnInit() {
    
  }

}
