import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menubutton',
  templateUrl: './menubutton.component.html',
  styleUrls: ['./menubutton.component.css']
})
export class MenubuttonComponent implements OnInit {

  @Input()
  menuButtonName : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
