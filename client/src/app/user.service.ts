import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  name : string = "";
  roles : string = "";
  email : string = "";
  admin : boolean = false;
  constructor() { }
}
