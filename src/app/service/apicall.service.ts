import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  private baseUrl: string = 'http://localhost:8080/api/'

  constructor(
    private http : HttpClient,
    private common : CommonService) {}

  getApiCall(path: string) {
    this.apiEvent(path)
    return this.http.get(this.baseUrl + path);
  }

  postApiCall(path: string, body = null) {
    this.apiEvent(path)
    return this.http.post(this.baseUrl + path, body);
  }

  apiEvent(path : String) : void {
    this.common.newApi(this.baseUrl + path);
  }
}
