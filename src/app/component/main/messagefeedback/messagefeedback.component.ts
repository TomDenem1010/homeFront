import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-messagefeedback',
  templateUrl: './messagefeedback.component.html',
  styleUrls: ['./messagefeedback.component.css']
})
export class MessagefeedbackComponent implements OnInit {

  messageFeedback : String = '';

  constructor(private common : CommonService) {
    this.common.messageEvent.subscribe({
      next : (event : String) => {
        this.messageFeedback = event;
      }
    })
  }

  ngOnInit(): void {
  }

}
