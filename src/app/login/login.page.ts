import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

/**
 * Represents the login page component.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  /**
   * The username entered by the user.
   */
  username: string = '';

  /**
   * The password entered by the user.
   */
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  /**
   * Handles the login action.
   * If the login is successful, it redirects to the home page.
   * If the login fails, it displays an error message.
   */
  onLogin() {
    if (this.authService.login(this.username, this.password)) {
      // Redirect to the home page if login is successful
      this.router.navigate(['/home']);
    } else {
      // Display an error message if login fails
      alert('Login failed. Invalid username or password.');
    }
  }
}
