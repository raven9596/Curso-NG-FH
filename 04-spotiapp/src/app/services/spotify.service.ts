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
      'Authorization': 'Bearer BQCcxEgcbtL47LLxoFQl9m-RxrvkdxbIC5ugNMvgmE1A3j6uT-eL__lMKILfIpnwKflGeKoRiE9jRRCf0xQ'
    } );

    return this.http.get(url, { headers } );
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
               .pipe( map( data => data['albums'].items));

  }

  getArtista(termino: string) {

    return this.getQuery(`search?q=${ termino }&type=artist&offset=15`)
               .pipe( map( data => data['artists'].items ));

  }
}
