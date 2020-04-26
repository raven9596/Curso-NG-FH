import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubrUrl = 'https://www.googleapis.com/youtube/v3';
  private apikey = 'AIzaSyCMlyBz0S81Va0fGfrMZwC9PPVtKtOJ3kU';
  private playlist = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken = '';

  constructor(private http: HttpClient) { }

  getVideos() {

    const url = `${this.youtubrUrl}/playlistItems`;

    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('playlistId', this.playlist)
      .set('key', this.apikey);

    return this.http.get(url, { params });
  }
}
