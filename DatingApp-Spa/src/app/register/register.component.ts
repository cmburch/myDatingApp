import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  registerForm: FormGroup;


  constructor(private authService: AuthService, private toastr: ToastrService) { }
  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      confirmPassword: new FormControl('', Validators.required)
    }, this.passwordMatchValidator);

  }
  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch': true};
  }
  register() {
    // this.authService.register(this.model).subscribe(() => {
    //    console.log('registration successful');
    // }, err => {
    //   console.log(err);
    // });
    // console.log(this.model);
    this.toastr.success('Hello world!', 'Toastr fun!');
    console.log(this.registerForm.value);
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('Cancelled');
  }
}

