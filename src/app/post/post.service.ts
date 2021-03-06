import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor(private http:Http) { }

  addPost(){
    return this.http.get('/api/post')
                  .map(res=>res.json());
  }

  getAllPosts() {
    return this.http.get('/api/posts')
                  .map(res=>res.json());
  }
}
