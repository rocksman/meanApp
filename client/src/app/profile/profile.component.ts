import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: String = this.user.name;
  admin : Boolean = this.user.admin;
  constructor(private user: UserService, private router: Router) {
  }
  roles(){
    if(this.user.roles == "lender"){
      this.router.navigateByUrl('/profile/lender') 
    }
    else if(this.user.roles == "borrower"){
      this.router.navigateByUrl('/profile/borrow')
    }
  }
  ngOnInit() {
  }

}
