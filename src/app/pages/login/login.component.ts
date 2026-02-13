import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [...MATERIAL_IMPORTS, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage = '';

constructor(private fb: FormBuilder, private router: Router) {
  this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  this.loginForm.valueChanges.subscribe(() => {
    this.errorMessage = '';
  });
}


login() {
  const { username, password } = this.loginForm.value;

  if (username === 'achyuth' && password === 'nothing2a') {
    localStorage.setItem('loggedIn', 'true');
    this.router.navigate(['/dashboard']);
  } else {
    this.errorMessage = 'Invalid username or password';
  }
}

}
