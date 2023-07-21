import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // public loginForm: FormGroup = new FormGroup({
  //   mail: new FormControl(),
  //   password: new FormControl(),

  // })
  // constructor(private loginPage: LoginService,private router:Router) { }

  // login() {
  //   console.log(this.loginForm);

  //   this.loginPage.submit(this.loginForm.value).subscribe(
  //     (data: any) => {
  //       alert("Login SucessFull");
  //       this.router.navigateByUrl('/dashboard');
  //     },
  //     (err: any) => {
  //       alert("Error in Login Credntials")
  //     }
  //   )

  // }
}
