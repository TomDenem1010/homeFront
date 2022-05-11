import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public loginEvent: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  public messageEvent: EventEmitter<String> = new EventEmitter<String>();
  public apiEvent: EventEmitter<String> = new EventEmitter<String>();
  
  constructor() { 
    this.watchLocalStorage();
  }

  private watchLocalStorage() : void {
    if(localStorage.getItem("name")) {
      this.login();
    } else {
      this.logout();
    }
  }

  login() : void {
    this.loginEvent.emit(true);
  }

  logout() : void {
    this.loginEvent.emit(false);
  }

  newMessage(message : String) : void {
    this.messageEvent.emit(message);
  }

  newApi(api : String) : void {
    this.apiEvent.emit(api);
  }
}
