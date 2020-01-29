import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 
    console.log('Spotify Service Listo');
  }

  getNewReleases() {
    
    const headers = new HttpHeaders( {
      'Authorization': 'Bearer BQA1wmwwkoHX5aDFimi07nH_HFzFYss2XWPIhdi-Uy0fzHH_lDib_OH2_jGUPj3RD3-yDdj_6u0DgDF4Xlk'
    } );

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
           .pipe( map( data => {
              return data['albums'].items;
            }));
  }
 
  getArtista(termino: string) {

    const headers = new HttpHeaders( {
      'Authorization': 'Bearer BQA1wmwwkoHX5aDFimi07nH_HFzFYss2XWPIhdi-Uy0fzHH_lDib_OH2_jGUPj3RD3-yDdj_6u0DgDF4Xlk'
    } );

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&offset=15`, { headers })
    .pipe( map( data => {
      return data['artists'].items;
    }));

  }
}
