import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/service/apicall.service';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuList: any;  

  constructor(
    private apiCall: ApicallService,
    private common: CommonService,
    private router: Router) { 
      this.common.loginEvent.subscribe({
        next: (event : boolean) => {
          if(event) {
            this.getMenu();
          } else {
            this.clearMenu();
          }
        }
      })
  }

  ngOnInit(): void {
    if(this.isLogedIn()) {
      this.getMenu();
    }
  }

  isLogedIn() : boolean {
    if(localStorage.getItem('name')) {
      return true;
    }
    return false;
  }

  getMenu() : void {
    this.apiCall.getApiCall('menu').subscribe((response: any) => {
      this.menuList = response.menuDtos;
      this.goToFirstHit(response.menuDtos[0].path);
    })
  }

  goToFirstHit(menu : String) {
    this.router.navigate([menu]);
  } 

  clearMenu() : void {
    this.menuList = null;
  }
}
