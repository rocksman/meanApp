import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {
  projectForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private user : UserService) {
    this.projectForm = fb.group({
      'name': [null, Validators.required],
      'amount': [null, Validators.required]
    })
  }
  addProject(pForm) {
    pForm.email = this.user.email;
    console.log(pForm);
    this.http.post('/addproj', pForm)
      .subscribe(
        data => {
          console.log(data);
        }
      )
  }
  ngOnInit() {
  }

}
