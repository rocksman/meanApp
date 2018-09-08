import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private user: UserService, private router: Router) {
    this.signupForm = fb.group({
      'username': [null, Validators.required],
      'email': [null, Validators.required],
      'password': [null, Validators.required],
      'confPassword': [null, Validators.required],
      'roles' : [null, Validators.required]
    })
  }
  signup(sForm){
    console.log(sForm);
    this.http.post('/signup', sForm)
    .subscribe(
      data => {
        console.log(data);
        var result = JSON.parse(JSON.stringify(data));
        console.log(result.user.role);
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
        }
      }
    )
  }

  ngOnInit() {
  }

}
