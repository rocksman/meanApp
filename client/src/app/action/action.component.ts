import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  Actions : any;
  constructor(private http:HttpClient, private user: UserService) { }
  ngOnInit() {
    this.http.post('/getActions',{ email: this.user.email})
    .subscribe(
      data => {
        console.log(data);
        this.Actions = data;
      }
    )
  }

}
