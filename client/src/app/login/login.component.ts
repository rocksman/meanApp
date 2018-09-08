import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../app/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private user : UserService, private router: Router) {
    this.loginForm = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    })
  }
  login(lForm){
    console.log(lForm);
    this.http.post('/login', lForm)
    .subscribe(
      data => {
        console.log(data);
        var result = JSON.parse(JSON.stringify(data));
        if(result.success== true){
          this.user.name = result.user.name;
          this.user.email = result.user.email;
          this.user.roles = result.user.role;
          if(result.user.role == "lender"){
            this.router.navigateByUrl('/profile/lender') 
          }
          else if(result.user.role == "borrower"){
            this.router.navigateByUrl('/profile/borrow')
          }
          else if(result.user.role == "admin"){
            this.router.navigateByUrl('/profile/admin');
          }
        }
        
      }
    )
  }
  ngOnInit() {
  }

}
