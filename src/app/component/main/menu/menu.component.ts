import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuList: any;  

  constructor(private apiCall: ApicallService) { }

  ngOnInit(): void {
    this.apiCall.getApiCall('menu').subscribe((response: any) => {
      this.menuList = response.menuDtos;
    })
  }

}
