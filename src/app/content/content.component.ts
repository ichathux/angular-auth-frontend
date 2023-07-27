import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  componentToShow: string = "welcome";
  constructor(private axiosService : AxiosService){}

  ngOnInit(): void {

    // if (this.axiosService.checkAuthTokenValid()) {
    //   this.componentToShow = "messages"
      
    // }else{
    //   // this.axiosService.logout();
    //   this.componentToShow = "welcome";
    // }

  }

  isUserLoggedIn():boolean{
    // console.log(this.axiosService.checkUserLoggedIn())
    return this.axiosService.checkUserLoggedIn();
  }
  showComponent(componentToShow : string): void{
    this.componentToShow = componentToShow;
  }
  onLogin(input : any): void{
    this.axiosService.request(
      "POST",
      "/login",
      {
        login: input.login,
        password: input.password
      }
    ).then(response => {
      this.axiosService.setAuthToken(response.data.token);
      this.componentToShow = "messages";
    });
  }
  onRegister(input : any): void{
    this.axiosService.request(
      "POST",
      "/register",
      {
        firstName: input.firstName,
        lastName: input.lastName,
        login: input.login,
        password: input.password
      }
    ).then(response => {
      this.axiosService.setAuthToken(response.data.token);
      this.componentToShow = "messages";
    });
  }
}
