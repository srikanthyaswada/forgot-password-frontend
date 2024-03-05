import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordService } from '../forgotpassword.service';
import { log } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passwordreset',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './passwordreset.component.html',
  styleUrl: './passwordreset.component.scss'
})
export class PasswordresetComponent implements OnInit {
  resetForm!: FormGroup;
  uid: any;
  userid: any;
  constructor(private fb: FormBuilder, private api: ForgotpasswordService, private router: Router) {

  }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      password: ['']
    })
    this.uid = localStorage.getItem('user')
    console.log(this.uid);
    this.userid = JSON.parse(this.uid);
    console.log(this.userid);
  }



  resetPassword() {
    this.api.resetPassword(this.userid, this.resetForm.value,).subscribe((res: any) => {
      console.log(res);
      window.alert("Your password has been reset successfully")
      this.router.navigate(['/login'])
    })
  }
}
