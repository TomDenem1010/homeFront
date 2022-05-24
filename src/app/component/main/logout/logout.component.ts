import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/service/apicall.service';
import { CommonService } from 'src/app/service/common.service';
import * as moment from 'moment';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  timeToLogoutMinute : number = 0;
  timeToLogoutSecond : number = 0;
  interval : any = this.setLogoutTimeout();

  constructor(
    private router: Router,
    private common: CommonService,
    private apiCall: ApicallService) { 
    }

  ngOnInit(): void {
    this.setTimeToLogout()
  }

  setTimeToLogout() : void {
      this.timeToLogoutMinute = Math.floor(this.getLogoutDuration() / 60 );
      this.timeToLogoutSecond = Math.floor(this.getLogoutDuration() - (this.timeToLogoutMinute * 60));
  }

  setLogoutTimeout() : void {
    this.interval = setInterval(() => {
      if(this.getLogoutDuration() > 0) {
        this.setTimeToLogout();
      } else {
        this.logout();
      }
    },1000)
  }

  getLogoutDuration() : number {
      let nowMoment = moment();
      let endMoment = moment(localStorage.getItem("end"));
      return moment.duration(endMoment.diff(nowMoment)).asSeconds();
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
