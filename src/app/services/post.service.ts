import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/post";
const API_URL = 'http://localhost:8000/posts'
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<Post[]>{
    return this.httpClient.get<Post[]>(API_URL)
  }

  // @ts-ignore
  savePost(post){
    this.savePost(post)
  }

  findById(id: string): Observable<Post> {
    return this.httpClient.get<Post>(API_URL + `/${id}`);
  }

  deletePost(id: string): Observable<Post> {
    return this.httpClient.delete<Post>(API_URL + `/${id}`);
  }

  updatePost(id: string, post: Post): Observable<Post> {
    return this.httpClient.put<Post>(API_URL + `/${id}`, post);
  }

}
