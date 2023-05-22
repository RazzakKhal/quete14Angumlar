import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  username = new FormControl("");
  email = new FormControl("");
  password = new FormControl("");
  street = new FormControl("");
  city = new FormControl("");
  postCode = new FormControl("");
  myUser : User | undefined;


  afficheLog(){
   this.myUser = new User(this.username.value, this.email.value, this.password.value,this.street.value, this.city.value, this.postCode.value);
  }


}
