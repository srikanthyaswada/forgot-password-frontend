import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

 
  private apiUrl = 'http://localhost:3000'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  sendPasswordResetEmail(email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/forgot-password`, { email });
  }

  resetPassword(id:any, data:any){
    return this.http.put(`${this.apiUrl}/password-reset/`+id, data, );
  }

  registerUser(data:any){
    return this.http.post(`${this.apiUrl}/user`, data);
  }

  login(data:any){
    return this.http.post(`${this.apiUrl}/login`,data);
  }
}
