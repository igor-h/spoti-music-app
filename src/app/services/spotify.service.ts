import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService { 
  
  constructor(private http: HttpClient){ }


  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDPS7HSlzKOO1lsNbpCDUsqVat2VxTu1QOWVyRDqYpD6FpCL1JFGCTsOSu_Ot4Z-WY4fpk0lkFIP-Ef9cM'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data => data['albums'].items ));

  }

  getArtists( nombreArtista: string ) {

    return this.getQuery(`search?q=${ nombreArtista }&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items));

  }

}
