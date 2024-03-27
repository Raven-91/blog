import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {NgClass, NgIf, NgStyle} from "@angular/common";
import {
  authProcess,
  catchErrorAndShowMessage, getInputValue, isValidInput, togglePassword
} from "../../../utils/shared";
import {AuthService} from "../../../core/auth/auth.service";
import {DefaultResponseType} from "../../../../types/default-response.type";
import {LoginResponseType} from "../../../../types/login-response.type";
import {HttpErrorResponse} from "@angular/common/http";
import {SignupDataType} from "../../../../types/signup-data-type";
import {LanguageService} from "../../../shared/services/language.service";
import {errorsMessagesData} from "../../../data/errors-messages-data";
import {HotToastService} from "@ngneat/hot-toast";


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    TranslateModule,
    NgStyle,
    NgClass,
    NgIf
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  private fb: FormBuilder = inject(FormBuilder);
  private toastService: HotToastService = inject(HotToastService);
  private authService: AuthService = inject(AuthService);
  private languageService: LanguageService = inject(LanguageService);
  private router: Router = inject(Router);
  protected readonly isValidInput = isValidInput;
  protected readonly getInputValue = getInputValue;

  signupForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [
      Validators.email,
      Validators.required,
      Validators.pattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)]
    ],
    password: ['', [
      Validators.required,
      Validators.pattern(/^(?=.*\d)(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])[0-9a-zA-Zа-яёА-ЯЁ]{8,}$/)]
    ],
    confirmPassword: ['', [
      Validators.required,
      Validators.pattern(/^(?=.*\d)(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])[0-9a-zA-Zа-яёА-ЯЁ]{8,}$/)]
    ],
    agree: [false, Validators.requiredTrue]
  })

  showPassword: boolean = false;

  signUp(): void {
    const user: SignupDataType = {
      firstName: this.signupForm.value.firstName,
      lastName: this.signupForm.value.lastName,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      confirmPassword: this.signupForm.value.confirmPassword,
      agree: this.signupForm.value.agree
    }
    if (this.signupForm.valid && user.firstName && user.lastName && user.email && user.password && user.confirmPassword && user.agree) {
      this.authService.signup(user).subscribe({
        next: (data: DefaultResponseType | LoginResponseType): void => {
          authProcess(data, this.languageService, this.toastService, this.authService, this.router,
            'signUpErrorMessage', 'signUpSuccessMessage');
        },
        error: (errorResponse: HttpErrorResponse): void => {
          catchErrorAndShowMessage(errorResponse, this.toastService, this.languageService, errorsMessagesData['signUpErrorMessage']);
        }
      })
    }
  }

  @ViewChild('password') password!: ElementRef;
  @ViewChild('confirmPassword') confirmPassword!: ElementRef;

  toggleViewPassword(): void {
    this.showPassword = !this.showPassword;
    togglePassword(this.showPassword, this.password);
    togglePassword(this.showPassword, this.confirmPassword);
  }
}
