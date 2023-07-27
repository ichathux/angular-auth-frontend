import { Component, OnInit } from '@angular/core';
import {AxiosService} from '../axios.service';

@Component({
  selector: 'app-authcontent',
  templateUrl: './auth-content.component.html',
  styleUrls: ['./auth-content.component.css']
})

export class AuthContentComponent implements OnInit {

  data: string[] = [];
  userList : string[] = [];

  constructor(private axiosService : AxiosService) { }

  ngOnInit(): void {

    this.axiosService.request("GET","/messages",{})
    .then(
      (response) => this.data = response.data).catch(
        (error) => {
            if (error.response.status === 401) {
                this.axiosService.setAuthToken(null);
            } else {
                this.data = error.response.code;
            }

        }
    );
    this.axiosService.request("GET", "/GetUserList",{})
    .then(
      (response) => {
        console.log(response)
        this.userList = response.data;
      }
    ).catch(
      (error) =>{
        console.log(error)
      //   if (error.response.status === 401) {
      //     this.axiosService.setAuthToken(null);
      // } else {
      //     this.data = error.response.code;
      // }
    })

  }

}
