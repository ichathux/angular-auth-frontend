import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import axios from 'axios';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  constructor(private axiosService : AxiosService) { }


  @Output() loginEvent = new EventEmitter();
  logoutEvent():void{
    this.axiosService.logout();
  }
  isUserLoggedIn():boolean{
    console.log(this.axiosService.checkUserLoggedIn())
    return this.axiosService.checkUserLoggedIn();
  }
}
