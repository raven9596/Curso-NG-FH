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

  getQuery( query: string) {

    const urlSpotiApi = 'https://api.spotify.com/v1/';

    const url = urlSpotiApi + query;

    const headers = new HttpHeaders( {
      'Authorization': 'Bearer BQDSirkdfMhlvi9ojgWsT7sZ5NOPypFwpunRTFkxOO3JndqtqxdxiTEKtc76YndDVu952rDq0__BNN-o4_Y'
    } );

    return this.http.get(url, { headers } );
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
               .pipe( map( data => data['albums'].items));

  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${ termino }&type=artist&offset=15`)
               .pipe( map( data => data['artists'].items ));

  }

  getArtista( id: string) {

    return this.getQuery(`artists/${id}`);
              //  .pipe( map( data => data['artists'].items ));

  }
}
