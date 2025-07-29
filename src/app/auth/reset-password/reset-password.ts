import { Component } from '@angular/core';
import {MatCard} from '@angular/material/card';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {MatProgressBar} from '@angular/material/progress-bar';

@Component({
  selector: 'app-reset-password',
  imports: [
    MatCard,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    RouterLink,
    MatButton,
    MatError,
    MatInput,
    NgIf,
    MatProgressBar
  ],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css'
})
export class ResetPassword {
  form: FormGroup;
  loading: boolean=true;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const email = this.form.value.email;
      // Call your password reset service here
      console.log('Reset link sent to:', email);
      // Optionally show a success message or redirect
    }
  }
}
