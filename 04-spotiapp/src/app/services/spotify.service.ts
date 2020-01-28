import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 
    console.log('Spotify Service Listo');
  }

  getNewReleases() {
    
    const headers = new HttpHeaders( {
      'Authorization': 'Bearer BQDSwcR3u8Ad8lSUa12C_OpLNpzYxqrGgLRxf6OrjqT_fmcEYYJJRV7p4hyVnVwwYPOrw1mP_L9UItVApSo'
    } );

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
