import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray} from '@angular/forms';
import {MatFormField, MatInput, MatInputModule, MatLabel} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgIf} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatStep, MatStepper} from '@angular/material/stepper';
import {Auth} from '../../core/services/authservice/auth';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';
import {RouterLink} from '@angular/router';



export interface Fruit{
  name: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    MatLabel,
    NgIf,
    MatInput,
    MatButton,
    MatStepper,
    MatStep,
    MatChipsModule,
    MatIconModule,
    RouterLink
  ],
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  registerForm: FormGroup;
  step = 0;

  constructor(private fb: FormBuilder ,private  auth : Auth,  private snackBar: MatSnackBar) {
    this.registerForm = this.fb.group({
      step1: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      }),
      step2: this.fb.group({
        bio: [''],
        avatarUrl: ['']
      }),
      step3: this.fb.group({
        competences: this.fb.array([])
      })
    });
  }

  // Getters for convenience
  get step1(): FormGroup {
    return this.registerForm.get('step1') as FormGroup;
  }

  get step2(): FormGroup {
    return this.registerForm.get('step2') as FormGroup;
  }

  get step3(): FormGroup {
    return this.registerForm.get('step3') as FormGroup;
  }

  get competences(): FormArray {
    return this.step3.get('competences') as FormArray;
  }

  addCompetence() {
    const competenceGroup = this.fb.group({
      competenceId: [null],
      name: ['', Validators.required]
    });
    this.competences.push(competenceGroup);
  }

  removeCompetence(index: number) {
    this.competences.removeAt(index);
  }

  nextStep() {
    if (this.step < 2) {
      this.step++;
    }
  }

  prevStep() {
    if (this.step > 0) {
      this.step--;
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Value:', this.registerForm.value);
        if (this.registerForm.valid) {
      const formValue = {
      ...this.registerForm.value.step1,
      ...this.registerForm.value.step2,
      ...this.registerForm.value.step3

    };
    this.auth.register(formValue).subscribe({
      next: (res) => {

        const token = res.token;
        const username = res.username;

        if (token) {
          this.auth.saveToken(token,username);
          this.snackBar.open(res.message, "close", {

            panelClass: ['success-snackbar'],
            duration:2000
          });
          console.log('Token saved:', token ,"for user",username);
        }

          console.log('Register success:', res);

        },
        error: (err) => {
          this.snackBar.open("Register failed", "close", {
            panelClass: ['error-snackbar'],
            duration:2000




          })
          console.error('Register failed:', err);
        }


      }) };



    } else {
      this.registerForm.markAllAsTouched();
    }
  }




}
