import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordService } from '../forgotpassword.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private api: ForgotpasswordService) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }



  loginuser() {
    this.api.login(this.loginForm.value).subscribe((res: any) => {
      localStorage.setItem('user', JSON.stringify(res));
      console.log(res);

    })
  }
}
