import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/service/apicall.service';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  autologoutMinute : String = '';
  autologoutMinuteHelper : any;
  autologoutSecond : String = '';
  autologoutSecondHelper : any;
  interval : any = this.setLogoutTimeout();

  constructor(
    private router: Router,
    private common: CommonService,
    private apiCall: ApicallService) { 
      this.common.apiEvent.subscribe({
        next: () => {
          this.initAutoLogout();
        }
      })
    }

  ngOnInit(): void {
    this.initAutoLogout();
  }

  initAutoLogout() : void {
    this.setAutoLogout(5);
  }

  setAutoLogout(minute : number) : void {
    this.autologoutMinuteHelper = minute - 1;

    if(this.autologoutMinuteHelper >= 10) {
      this.autologoutMinute = `${minute - 1}`;
    } else if (this.autologoutMinuteHelper > 0){
      this.autologoutMinute = `0${minute - 1}`;
    } else {
      this.autologoutMinute = '00';
    }
    
    this.autologoutSecondHelper = 59;
    this.autologoutSecond = '59';
  }

  setLogoutTimeout() : void {
    this.interval = setInterval(() => {
      if(this.autologoutMinuteHelper != 0 || this.autologoutSecondHelper != 0) {
        if(this.autologoutSecondHelper != 0) {
          this.autologoutSecondHelper--;
          if(this.autologoutSecondHelper >=10) {
            this.autologoutSecond = `${this.autologoutSecondHelper}`;
          } else {
            this.autologoutSecond = `0${this.autologoutSecondHelper}`;
          }
        } else {
          this.setAutoLogout(this.autologoutMinuteHelper);
        }
      } else {
        this.logout();
      }
    },1000)
  }

  logout() : void {
    this.apiCall.postApiCall('logout', this.getUserData()).subscribe((response: any) => {
      localStorage.clear();
      this.common.logout();
      this.router.navigate([""]);
    });
  } 

  getUserData() : any {
    return {
      name: localStorage.getItem('name'),
      password: localStorage.getItem('password')
    }
  }
}
