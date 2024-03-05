import { Component } from '@angular/core';
import { ForgotpasswordService } from '../forgotpassword.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
export class PasswordComponent {
  email!: string;
  message!: string;

  constructor(private emailService: ForgotpasswordService) { }

  onSubmit(): void {
    this.emailService.sendPasswordResetEmail(this.email).subscribe(
      () => {
       
        this.message = 'Check your email and reset your password';
        window.alert(this.message);
      },
      (error) => {
        console.error(error);
        this.message = 'Error sending password reset email';
      }
    );
    
  }
}
