import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {NgStyle} from "@angular/common";
import {
  authProcess, catchErrorAndShowMessage,
  getInputValue, isValidInput, togglePassword
} from "../../../utils/shared";
import {AuthService} from "../../../core/auth/auth.service";
import {LanguageService} from "../../../shared/services/language.service";
import {DefaultResponseType} from "../../../../types/default-response.type";
import {LoginResponseType} from "../../../../types/login-response.type";
import {HttpErrorResponse} from "@angular/common/http";
import {LoginDataType} from "../../../../types/login-data-type";
import {errorsMessagesData} from "../../../data/errors-messages-data";
import {HotToastService} from "@ngneat/hot-toast";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    ReactiveFormsModule,
    NgStyle
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private fb: FormBuilder = inject(FormBuilder);
  private cookieService: CookieService = inject(CookieService);
  private toastService: HotToastService = inject(HotToastService);
  private authService: AuthService = inject(AuthService);
  private languageService: LanguageService = inject(LanguageService);
  private router: Router = inject(Router);
  protected readonly isValidInput = isValidInput;
  protected readonly getInputValue = getInputValue;

  cookieEmailValue: string = '';
  cookiePasswordValue: string = '';
  showPassword: boolean = false;

  ngOnInit(): void {
    this.cookieEmailValue = this.cookieService.get('email');
    this.cookiePasswordValue = this.cookieService.get('password');

    if (this.cookieEmailValue !== '' && this.cookiePasswordValue !== '') {
      this.loginForm.get('email')?.setValue(this.cookieEmailValue);
      this.loginForm.get('password')?.setValue(this.cookiePasswordValue);
    }
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
    rememberMe: [false]
  })

  login(): void {
    const user: LoginDataType = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      rememberMe: this.loginForm.value.rememberMe
    }
    if (this.loginForm.valid && user.email && user.password) {
      if (user.rememberMe) {
        this.cookieService.set('email', this.loginForm.value.email);
        this.cookieService.set('password', this.loginForm.value.password);
      }
      this.authService.login(user).subscribe({
        next: (data: DefaultResponseType | LoginResponseType): void => {
          authProcess(data, this.languageService, this.toastService, this.authService, this.router,
            'logInErrorMessage', 'logInSuccessMessage');
        },
        error: (errorResponse: HttpErrorResponse): void => {
          catchErrorAndShowMessage(errorResponse, this.toastService, this.languageService, errorsMessagesData['logInErrorMessage']);
        }
      })
    }
  };

  @ViewChild('password') password!: ElementRef;
  toggleViewPassword(): void {
    this.showPassword = !this.showPassword;
    togglePassword(this.showPassword, this.password);
  }
}
