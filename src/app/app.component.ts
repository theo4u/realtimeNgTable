import { Component } from '@angular/core';
import { IMessage, MessageType, CloseType, NgAlertService } from '@theo4u/ng-alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: IMessage;
  closeTypes = CloseType;

  constructor(private _ngAlert: NgAlertService) {

  }
}
