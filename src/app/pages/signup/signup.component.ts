import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  email : string = "";
  password : string = "";

 constructor(private auth : AuthService) {}

   ngOnIt(): void {

   }

   signup(){

   



    if(this.email == ''){
      alert('Please enter email')
      return;
    }


    if(this.password == ''){
      alert('Please enter password')
      return;
    }
  
  this.auth.signup(this.email,this.password);
  

  this.password = '';
  this.email = '';
  

  

}
}
