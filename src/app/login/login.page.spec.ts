import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      providers: [AuthService, Router],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call authService.login with correct username and password', () => {
    spyOn(authService, 'login').and.returnValue(true);
    spyOn(router, 'navigate');

    component.username = 'testuser';
    component.password = 'testpassword';
    component.onLogin();

    expect(authService.login).toHaveBeenCalledWith('testuser', 'testpassword');
  });

  it('should navigate to home page if login is successful', () => {
    spyOn(authService, 'login').and.returnValue(true);
    spyOn(router, 'navigate');

    component.onLogin();

    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should display an error message if login fails', () => {
    spyOn(authService, 'login').and.returnValue(false);
    spyOn(window, 'alert');

    component.onLogin();

    expect(window.alert).toHaveBeenCalledWith('Login failed. Invalid username or password.');
  });
});
