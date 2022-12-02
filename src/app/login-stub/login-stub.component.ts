import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login-stub',
  templateUrl: './login-stub.component.html',
  styleUrls: ['./login-stub.component.scss']
})
export class LoginStubComponent {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  logIn(): void {
    this.auth.token = 'abc123';
  }
  logOut(): void {
    this.auth.token = '';
    this.router.navigate(['']);
  }

  isLoggedIn(): boolean {
    return !!this.auth.token;
  }
}
