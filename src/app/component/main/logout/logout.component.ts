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

  constructor(
    private router: Router,
    private common: CommonService,
    private apiCall: ApicallService) { 
    }

  ngOnInit(): void {
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
