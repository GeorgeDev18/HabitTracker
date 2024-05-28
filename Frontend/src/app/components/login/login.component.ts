import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Login } from '../../interfaces/login';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login: Login = new Login();

  constructor(private authService: AuthService, private router: Router) { }

  loginUser() {
    this.authService.login(this.login.username, this.login.password).subscribe(
      response => {
        if (response === 'Login successful') {
          this.router.navigate(['/api/v1/list-habits']);
        } else {
          alert('Invalid username or password');
        }
      },
      error => {
        console.error(error);
        alert('An error occurred');
      }
    );
  }
}


