import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService { 
  
  constructor(private http: HttpClient){ 
    console.log('Spotify Service Listo');
  }


  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAAeqXFXBAzs5YKrLnvjWhp08rnsBHka53QsSpx01CSNCXG1Te2mrUr8dJ6DRHOvEtvPgFQAeE1WaPnbnc'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=50')
              .pipe( map( data => data['albums'].items ));
  }

  getArtists( nombreArtista: string ) {

    return this.getQuery(`search?q=${ nombreArtista }&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items));
  }

  getArtista( id: string ) {

    return this.getQuery(`artists/${ id }`);
                // .pipe( map( data => data['artists'].items));
  }

  getTopTracks( id: string ) {

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                .pipe( map( data => data['tracks']));
  }

}
