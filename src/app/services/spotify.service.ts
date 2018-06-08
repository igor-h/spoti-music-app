import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) 
  { }

  getNewReleases(){
    let token:string = 'BQB3-3btq3GXZqgFWnDqHeDzj_r7vmtcovSZNMvkahnY9r7tWYSe1r-1e2sWKITog-AOeNgeiUBeqr8AwWU';

    const headers = new  HttpHeaders({
      'Authorization': 'Bearer ' + token
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?offset=0&limit=20', { headers });
      
  }
}
