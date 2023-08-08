import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent {

  constructor(public messagesService: MessageService) {}


}
