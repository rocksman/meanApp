import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-lender',
  templateUrl: './lender.component.html',
  styleUrls: ['./lender.component.css']
})
export class LenderComponent implements OnInit {
  Projects: any;
  constructor(private fb: FormBuilder, private http: HttpClient, private user: UserService) { }

  donate(proj) {
    console.log(proj);
    alert("project email:"+proj.email);
    this.http.post('/donate', { email: this.user.email, proj: proj.name, emailTo: proj.email, amount: proj.amount_req })
      .subscribe(
        data => {
          console.log(data);
          this.projs();
        }
      )
  }
  projs() {
    this.http.get('/getproj')
      .subscribe(
        data => {
          console.log(data);
          this.Projects = data;
        }
      );
  }

  ngOnInit() {
    this.projs();
  }

}
