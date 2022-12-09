import { Component } from '@angular/core';
import { FormControl, FormGroup,FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FormArray';
  loginform = new FormGroup({
    pan: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z]{5}[0-9]{4}[A-Za-z]$'),
    ]), //validators used for the error checking kind f it
    user: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Z][a-z]*$'),
    ]),
    date: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    numbers: new FormArray([
      new FormControl(null,[Validators.required]),
    ])
  });
  submit() {
    console.warn(this.loginform.value);
  }
  addSkill(){
    (<FormArray>this.loginform.get('numbers')).push(new FormControl(null,[Validators.required]))
  }

  delete(i: number) {
    let mobilenums = this.loginform.get('numbers') as FormArray;
    mobilenums.removeAt(i);
    console.log(mobilenums)
  }
  get pan() {
    return this.loginform.get('pan');
  }

  get user() {
    return this.loginform.get('user');
  }
  get date() {
    return this.loginform.get('date');
  }
  get mobile() {
    return this.loginform.get('mobile');
  }
  get numbers(){
    return this.loginform.get('numbers')
  }
}
