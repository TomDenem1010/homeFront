import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApicallService } from 'src/app/service/apicall.service';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  loginBody: any = {
    name: String,
    password: String
  }

  constructor(
    private apiCall: ApicallService,
    private common: CommonService) { }

  ngOnInit(): void {
  }

  login() {
    if(this.auth.valid) {
      this.setLoginBody();
      this.apiCall.postApiCall('login', this.loginBody).subscribe((response: any) => {
        if(!response.message) {
          this.successLogin(response);
        } else {
          this.errorLogin(response);
        }
      })
    }
  }

  setLoginBody() {
    this.loginBody.name = this.auth.get("name")?.value;
    this.loginBody.password = this.auth.get("password")?.value;
  }

  successLogin(response: any) : void {
    this.setLocalStorage(response);
    this.emitLogin();
  }

  errorLogin(response: any) : void {
    this.removeLocalStorage(response);
    this.emitError(response);
  }

  setLocalStorage(response: any) : void {
    localStorage.setItem("name", response.name);
    localStorage.setItem("password", response.password);
    localStorage.setItem("start", response.start);
    localStorage.setItem("end", response.end);
  }

  emitLogin() : void {
    this.common.login();
  }

  removeLocalStorage(response: any) : void {
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    localStorage.removeItem("start");
    localStorage.removeItem("end");
  }

  emitError(response: any) : void {
    this.common.newMessage(response.message);
  }
}
