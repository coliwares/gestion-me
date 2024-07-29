import { Injectable } from '@angular/core';

/**
  * Authenticates the user with the provided username and password.
  * @param username - The username to authenticate.
  * @param password - The password to authenticate.
  * @returns A boolean indicating whether the authentication was successful.
  */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storedUsername = 'admin';
  private readonly storedPassword = 'password123';

  constructor() { }

  //TODO: Implement login method
  login(username: string, password: string): boolean {
    if (username === this.storedUsername && password === this.storedPassword) {
      return true;
    } else {
      return false;
    }
  }
}
