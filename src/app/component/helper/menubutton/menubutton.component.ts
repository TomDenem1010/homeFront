import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubutton',
  templateUrl: './menubutton.component.html',
  styleUrls: ['./menubutton.component.css']
})
export class MenubuttonComponent implements OnInit {

  @Input()
  name: string = "";
  
  @Input()
  path: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoLink() {
    this.router.navigate([this.path]);
  }
}
