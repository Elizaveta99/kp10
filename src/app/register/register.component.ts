import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../models/User';

@Component({
  /*moduleId: module.id.toString(),*/
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
   model: any = {} ;
   // model: User;
   loading = false;

   constructor(
     private router: Router ,
     private userService: UserService) { }

   register() {
     this.loading = true;
     this.userService.create(this.model)
       .subscribe(
         data => {
           // !*this.alertService.success('Registration successful', true);*!/
            this.router.navigate(['/login']);
         },
         error => {
           // !*this.alertService.error(error);*/
           this.loading = false;
         });
   }
}
