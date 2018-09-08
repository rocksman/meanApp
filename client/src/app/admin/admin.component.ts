import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  Actions: any;
  constructor(private http: HttpClient, private user :UserService) { }

  ngOnInit() {
    this.user.admin = true;
    this.http.get('/allActions')
    .subscribe(
      data => {
        console.log(data);
        this.Actions = data;
      }
    )
  }

}
