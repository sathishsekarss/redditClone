// This service is responsible for handling http request from the backend 
import { Injectable, input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient:HttpClient) { }

  /**
   * Method to fetch login details for the login page
   * @param inputDetails - input obj containing username and password
   * @returns - Obersavable
   */
  checkLogin(inputDetails:{userName:string,password:string}){
    return this.httpClient.post("http://localhost:8080/LoginUser1",null,{
      params:{
        username:inputDetails.userName,
        password:inputDetails.password
      }
    })
  }

  fetchTestData(){
    return this.httpClient.get("http://localhost:8080/LoginUser");
  }

}
