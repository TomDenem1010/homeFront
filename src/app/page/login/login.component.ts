import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApicallService } from 'src/app/service/apicall.service';

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

  constructor(private apiCall: ApicallService) { }

  ngOnInit(): void {
  }

  login() {
    if(this.auth.valid) {
      this.setLoginBody();
      this.apiCall.postApiCall('login', this.loginBody).subscribe((response: any) => {
        console.log(response)
      })
    }
  }

  setLoginBody() {
    this.loginBody.name = this.auth.get("name")?.value;
    this.loginBody.password = this.auth.get("password")?.value;
  }
}
