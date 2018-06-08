import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  token:string = 'BQB0H2V7x5qHLgW1JUe491jZkz5deiMUtJv4ws_B56VuTrk7m-mONsUGYrXYNfLr2OnEkHbpL1DoBCNyNK8';
  constructor(private http: HttpClient){ }

  getNewReleases(){

    const headers = new  HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?offset=0&limit=20', { headers })
      .pipe( map(data => {
          return data['albums'].items;
      }));
      
  }

  getArtists(nombreArtista:string){

    const headers = new  HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ nombreArtista }&type=artist&limit=15`, { headers })
      .pipe( map( data => {
        return data['artists'].items;
      }));
      
  }
}
