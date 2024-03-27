import {FormGroup} from "@angular/forms";
import {LanguageService} from "../shared/services/language.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MessageType} from "../../types/message-type";
import {ElementRef} from "@angular/core";
import {DefaultResponseType} from "../../types/default-response.type";
import {LoginResponseType} from "../../types/login-response.type";
import {errorsMessagesData} from "../data/errors-messages-data";
import {successMessageData} from "../data/success-messages-data";
import {AuthService} from "../core/auth/auth.service";
import {Router} from "@angular/router";
import {HotToastService} from "@ngneat/hot-toast";

export const funcId = (id: string): HTMLElement | null => {
  return window.document.getElementById(id);
}

export const funcAddClass = (element: HTMLElement, className: string): void => {
  (element as HTMLElement).classList.add(className);
}

export const funcRemoveClass = (element: HTMLElement, className: string): void => {
  (element as HTMLElement).classList.remove(className);
}

export const isValidInput = (form: FormGroup, inputName: string) => {
  return form.get(inputName)?.invalid && (form.get(inputName)?.dirty || form.get(inputName)?.touched);
}

export const getInputValue = (form: FormGroup, inputName: string) => {
  return form.value[inputName];
}

export const toggleLanguage = (languageService: LanguageService, item: { en: string, ru: string }): string => {
  switch (languageService.getLanguagePage()) {
    case 'en':
      return item.en;
    case 'ru':
      return item.ru;
    default:
      return item.en;
  }
}

const toastParams = {
  duration: 2000, style: { maxWidth: '420px'}
}
export const openToastErrorMessage = (languageService: LanguageService, toastService: HotToastService, message: MessageType): void => {
  toastService.error(toggleLanguage(languageService, message), toastParams);
};

export const openToastSuccessMessage = (languageService: LanguageService, toastService: HotToastService, message: MessageType): void => {
  toastService.success(toggleLanguage(languageService, message), toastParams);
};

export const openToastInfoMessage = (languageService: LanguageService, toastService: HotToastService, message: MessageType): void => {
  toastService.info(toggleLanguage(languageService, message), toastParams);
};

export const authProcess = (data: DefaultResponseType | LoginResponseType, languageService: LanguageService,
                                 toastService: HotToastService, authService: AuthService, router: Router,
                                 errorKey: string, successKey: string): void => {
  let error = null;
  if ((data as DefaultResponseType).error && (data as DefaultResponseType).message) {
    error = (data as DefaultResponseType).message;
  }

  const loginResponse: LoginResponseType = data as LoginResponseType;
  if (!loginResponse.accessToken || !loginResponse.refreshToken || !loginResponse.userId) {
    error = errorsMessagesData[errorKey];
  }

  if (error) {
    openToastErrorMessage(languageService, toastService, error);
    throw new Error(toggleLanguage(languageService, error));
  }

  authService.setTokens(loginResponse.accessToken, loginResponse.refreshToken);
  authService.setUserId(loginResponse.userId);
  openToastSuccessMessage(languageService, toastService, successMessageData[successKey])
  router.navigate(['/']);
};

export const catchErrorAndShowMessage = ((
  errorResponse: HttpErrorResponse, toastService: HotToastService,
  languageService: LanguageService, message: MessageType): void => {
  if (errorResponse.error && errorResponse.error.message) {
    openToastErrorMessage(languageService, toastService, errorResponse.error.message);
  } else {
    openToastErrorMessage(languageService, toastService, message);
  }
});
// TOAST

export const funcSetItem = (item: string, param: string): void => {
  localStorage.setItem(item, param);
};

export const funcGetItem = (param: string) => {
  return localStorage.getItem(param);
};

export const funcRemoveItem = (param: string): void => {
  localStorage.removeItem(param);
};

export const togglePassword = (showPassword: boolean, element: ElementRef): void => {
  showPassword ? element.nativeElement.setAttribute('type', 'text') : element.nativeElement.setAttribute('type', 'password');
}
