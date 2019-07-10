import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

@Injectable()

export class HttpService {
  pictures: any = { };
  picUrl: string = 'https://api.flickr.com/services/rest/';
  picMethod: string = '?method=flickr.galleries.getPhotos';
  picApiKey: string = '&api_key=eb355090dc15f34557aeb6f862f10235';
  picGalleryId: string = '&gallery_id=72157708807299412';
  picFormat: string = '&format=json';
  picExtras: string = '&extras=url_s%2Clicense%2Cdate_upload%2Cdate_taken%2Cowner_name%2Cdescription';
  picPerPage: string = '&per_page=9';
  picPage: string = '&page=1';
  picJsonCallback: string = '&nojsoncallback=true&json_callback=JSON_CALLBACK';

  path = this.picUrl + this.picMethod + this.picApiKey + this.picGalleryId +
  this.picFormat + this.picExtras + this.picPerPage + this.picPage + this.picJsonCallback;

  get<T>(picPath: string): any {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getPictures(): Observable<object> {
    return this. http.get(this.path);
  }

  onContentLaoded(contents: any) {
    if ('ServiceWorker' in navigator) {
      const urls = new Set( ... this.get(contents));
      Array.from(urls).forEach(picPath => fetch(this.path));
    }
  }
}
