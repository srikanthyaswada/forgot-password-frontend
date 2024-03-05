import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordService } from '../forgotpassword.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  regForm!: FormGroup;

  constructor(private fb: FormBuilder, private api: ForgotpasswordService, private router: Router) { }
  ngOnInit(): void {
    this.regForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }
  register() {
    this.api.registerUser(this.regForm.value).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('user', JSON.stringify(res._id));
      this.router.navigate(['/login']);
    })
  }

}
