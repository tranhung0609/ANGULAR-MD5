import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = 'http://localhost:8080/api/products'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL);
  }

  savePost(posts: any): Observable<any> {
    return this.httpClient.post(API_URL, posts);
  }

  findById(id: any): Observable<any> {
    return this.httpClient.get(API_URL + `/${id}`);
  }

  delete(id: any): Observable<any> {
    return this.httpClient.delete(API_URL + `/${id}`);
  }

  update(id: any, products: any) {
    return this.httpClient.put(API_URL + `/${id}`, products);
  }

}
