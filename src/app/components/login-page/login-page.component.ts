import { Component, OnInit } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { LoginServiceService } from '../../../services/applicationServices/login-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ InputTextModule,FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {
  userName:string="default string";
  password:string="";
  constructor(private loginService:LoginServiceService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response:any)=>{
      console.log(response);
    })
  }

  /**
   * method to verify login
   */
  verifyCredentials(){
    console.log(`${this.userName} and ${this.password}`)
    console.log("submit method is invoked")
    this.loginService.checkLogin({userName:this.userName,password:this.password}).subscribe({
      next:(response)=>{
        console.log(response);
      }
    });
    
  }

  checkLoginState(apiResponse:any){
    if(apiResponse.userAllowed){
      this.router.navigateByUrl("/Dashboard");
    }
  }

}
