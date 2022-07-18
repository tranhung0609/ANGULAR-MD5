import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  countryList = [
    {id: 1, name: "VietNam"},
    {id: 2, name: "Nhật Bản"},
    {id: 3, name: "Hàn Quốc"}
  ];

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.min(19)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.pattern('^\\+84\\d{9,10}$')])
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }

  get confirmPassword() {
    return this.loginForm.get('confirmPassword')
  }

  get country() {
    return this.loginForm.get('country')
  }

  get age() {
    return this.loginForm.get('age')
  }

  get gender() {
    return this.loginForm.get('gender')
  }

  get phone() {
    return this.loginForm.get('phone')
  }
}
