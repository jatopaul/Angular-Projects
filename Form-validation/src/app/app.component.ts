import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Form Validation';
  // loginform!:FormGroup;
  // ngOnInit(){}
  loginform = new FormGroup({
    user: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Z][a-z]*$'),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z]*$'),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Z][a-z]*$'),
    ]),
    dropdown: new FormControl('', [Validators.required]),

    // pan: new  FormControl('',[Validators.required,Validators.pattern('^[A-Za-z]{5}[0-9]{4}[A-Za-z]$')]),//validators used for the error checking kind f it
    date: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
  });
  submit() {
    console.warn(this.loginform.value);
  }

  get user() {
    return this.loginform.get('user');
  }

  get email() {
    return this.loginform.get('email');
  }
  get password() {
    return this.loginform.get('password');
  }
  get message() {
    return this.loginform.get('message');
  }
  get dropdown() {
    return this.loginform.get('dropdown');
  }

  get date() {
    return this.loginform.get('date');
  }
  // get pan(){
  //   return this.loginform.get('pan')
  // }
  get mobile() {
    return this.loginform.get('mobile');
  }
  get gender(){
    return this.loginform.get('gender')
  }
}
