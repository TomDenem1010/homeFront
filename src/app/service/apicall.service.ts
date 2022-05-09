import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  private baseUrl: string = 'http://localhost:8080/api/'

  constructor(private http: HttpClient) { }

  getApiCall(path: string) {
    return this.http.get(this.baseUrl + path);
  }

  postApiCall(path: string, body = null) {
    return this.http.post(this.baseUrl + path, body);
  }
}
