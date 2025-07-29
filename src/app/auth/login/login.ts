import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {MatFormField, MatInput, MatInputModule, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {Router, RouterLink} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Auth} from '../../core/services/authservice/auth';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatProgressBar} from '@angular/material/progress-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    MatLabel,
    NgIf,
    MatInput,
    MatButton,
    RouterLink,
    MatProgressBar,
  ],
  styleUrls: ['./login.css']
})
export class LoginComponent  implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  progressValue = 0;
  bufferValue = 0;


constructor(private fb: FormBuilder ,private  auth : Auth ,    private snackBar: MatSnackBar,private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
 }

  ngOnInit(): void {
  if (localStorage.getItem('authToken')!=null) {
    this.router.navigate(['/home']);
  }

  }




  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;

      const  { email, password } = this.loginForm.value;
      // call auth service

      console.log('Logging in with', email, password);
    this.auth.login( { email, password }).subscribe({
      next: (res) => {
        const token = res.token;
        const username = res.username;
        this.auth.saveToken(token,username);
        this.snackBar.open(res.message, "close", {

          panelClass: ['success-snackbar'],
          duration:2000
        });
        this.isLoading = false;
        this.router.navigate(['/home']);


        console.log('Login success:', res, "for user", username, token);
        // Handle login success, maybe store token or navigate
      },
      error: (err) => {
        this.snackBar.open("Login failed", "close", {
          panelClass: ['error-snackbar'],
          duration:2000

        })
        this.isLoading = false;

        console.error('Login failed:', err);
      }
    });


    }
  }


}

