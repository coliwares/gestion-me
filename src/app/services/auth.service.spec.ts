import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
it('should return true when valid credentials are provided', () => {
  // Arrange
  const authService = TestBed.inject(AuthService);
  const username = 'admin';
  const password = 'password123';

  // Act
  const result = authService.login(username, password);

  // Assert
  expect(result).toBeTrue();
});

it('should return false when invalid credentials are provided', () => {
  // Arrange
  const authService = TestBed.inject(AuthService);
  const username = 'invalid';
  const password = 'invalid';

  // Act
  const result = authService.login(username, password);

  // Assert
  expect(result).toBeFalse();
});
