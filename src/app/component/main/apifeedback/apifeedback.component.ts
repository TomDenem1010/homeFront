import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-apifeedback',
  templateUrl: './apifeedback.component.html',
  styleUrls: ['./apifeedback.component.css']
})
export class ApifeedbackComponent implements OnInit {

  apiFeedback : String = '';

  constructor(private common : CommonService) {
    this.common.apiEvent.subscribe({
      next : (event : String) => {
        this.apiFeedback = event;
      }
    })
  }

  ngOnInit(): void {
  }

}
