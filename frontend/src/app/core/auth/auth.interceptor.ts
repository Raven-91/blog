import {inject, Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import {catchError, finalize, Observable, switchMap, throwError} from 'rxjs';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {DefaultResponseType} from "../../../types/default-response.type";
import {LoginResponseType} from "../../../types/login-response.type";
import {LoaderService} from "../../shared/services/loader.service";
import {toggleLanguage} from "../../utils/shared";
import {LanguageService} from "../../shared/services/language.service";
import {errorsMessagesData} from "../../data/errors-messages-data";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  private languageService: LanguageService = inject(LanguageService);
  private loaderService: LoaderService = inject(LoaderService);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    const tokens = this.authService.getTokens();
    if (tokens && tokens.accessToken) {
      const authReq = req.clone({
        headers: req.headers.set('x-auth', tokens.accessToken)
      });
      return next.handle(authReq).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401 && !authReq.url.includes('/login') && !authReq.url.includes('/refresh')) {
            return this.handle401Error(authReq, next);
          }
          return throwError(() => error);
        }),
        finalize(() => {
          this.loaderService.hide();
        })
      );
    }
    return next.handle(req)
      .pipe(
        finalize(() => {
          this.loaderService.hide();
        })
      );
  }

  handle401Error(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.refresh()
      .pipe(
        switchMap((result: DefaultResponseType | LoginResponseType) => {

          let error: string = '';

          if ((result as DefaultResponseType).error) {
            error = toggleLanguage(this.languageService, (result as DefaultResponseType).message);
          }

          const refreshResult: LoginResponseType = result as LoginResponseType;
          if (!refreshResult.accessToken || !refreshResult.refreshToken || !refreshResult.userId) {
            error = toggleLanguage(this.languageService, errorsMessagesData['logInErrorMessage']);
          }

          if (error) {
            return throwError(() => new Error(error));
          }

          this.authService.setTokens(refreshResult.accessToken, refreshResult.refreshToken);

          const authReq = req.clone({
            headers: req.headers.set('x-auth', refreshResult.accessToken)
          });

          return next.handle(authReq);
        }),
        catchError(error => {
          this.authService.removeTokens();
          this.router.navigate(['/']);
          return throwError(() => error);
        })
      )
  }
}
