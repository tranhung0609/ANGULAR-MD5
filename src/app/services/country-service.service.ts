import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const API_URL = 'http://localhost:8888/api/countries'


@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(API_URL)
  }}
