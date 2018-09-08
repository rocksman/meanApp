import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  roleForm: any;
  constructor(private http: HttpClient, private user: UserService, private fb: FormBuilder, private router: Router) {
    this.roleForm = fb.group({
      'roles': [null, Validators.required]
    })
  }
  chooseRole(val) {
    val.email = this.user.email;
    console.log(val);
    this.http.post('/role', val)
      .subscribe(
        data => {
          this.user.roles = val.roles;
          if (val.roles == "lender") {
            this.router.navigateByUrl('/profile/lender')
          }
          else if (val.roles == "borrower") {
            this.router.navigateByUrl('/profile/borrow')
          }
        }
      )
  }
  ngOnInit() {
    this.http.get('/fblogin')
      .subscribe(
        data => {
          console.log(data);
          var val = JSON.parse(JSON.stringify(data));
          this.user.name = val.name;
          this.user.email = val.email;
          this.user.roles = val.role;
          if (val.role == "lender") {
            this.router.navigateByUrl('/profile/lender')
          }
          else if (val.role == "borrower") {
            this.router.navigateByUrl('/profile/borrow')
          }

        }
      );
  }

}
