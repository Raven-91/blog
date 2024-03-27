import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject, throwError} from "rxjs";
import {DefaultResponseType} from "../../../types/default-response.type";
import {environment} from "../../../environments/environment";
import {LoginResponseType} from "../../../types/login-response.type";
import {SignupDataType} from "../../../types/signup-data-type";
import {funcGetItem, funcRemoveItem, funcSetItem, toggleLanguage} from "../../utils/shared";
import {errorsMessagesData} from "../../data/errors-messages-data";
import {LanguageService} from "../../shared/services/language.service";
import {LoginDataType} from "../../../types/login-data-type";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private languageService: LanguageService = inject(LanguageService);
  private http: HttpClient = inject(HttpClient);

  accessTokenKey: string = 'accessToken';
  refreshTokenKey: string = 'refreshToken';
  userIdKey: string = 'userId';

  isLogged$: Subject<boolean> = new Subject<boolean>();
  private isLogged: boolean = false;

  constructor() {
    this.isLogged = !!funcGetItem(this.accessTokenKey);
  }

  login( user: LoginDataType ): Observable<DefaultResponseType | LoginResponseType> {
    return this.http.post<DefaultResponseType | LoginResponseType>(environment.api + 'login', user)
  }

  signup( user: SignupDataType ):
    Observable<DefaultResponseType | LoginResponseType> {
    return this.http.post<DefaultResponseType | LoginResponseType>(environment.api + 'signup', user)
  };

  logout(): Observable<DefaultResponseType> {
    const tokens = this.getTokens();
    if (tokens && tokens.refreshToken) {
      return this.http.post<DefaultResponseType>(environment.api + 'logout', {
        refreshToken: tokens.refreshToken
      })
    } else {
      throw throwError(() => toggleLanguage(this.languageService, errorsMessagesData['authLogOutErrorMessage']));
    }
  }

  refresh(): Observable<DefaultResponseType | LoginResponseType> {
    const tokens = this.getTokens();
    if (tokens && tokens.refreshToken) {
      return this.http.post<DefaultResponseType | LoginResponseType>(environment.api + 'refresh', {
        refreshToken: tokens.refreshToken
      })
    }
    throw throwError(() => toggleLanguage(this.languageService, errorsMessagesData['authRefreshErrorMessage']));
  }

  getIsLoggedIn(): boolean {
    return this.isLogged;
  }

  setTokens(accessToken: string, refreshToken: string): void {
    funcSetItem(this.accessTokenKey, accessToken);
    funcSetItem(this.refreshTokenKey, refreshToken);
    this.isLogged = true;
    this.isLogged$.next(true);
  }

  removeTokens(): void {
    funcRemoveItem(this.accessTokenKey);
    funcRemoveItem(this.refreshTokenKey);
    funcRemoveItem(this.userIdKey);
    this.isLogged = false;
    this.isLogged$.next(false);
  }

  getTokens(): { accessToken: string | null, refreshToken: string | null } {
    return {
      accessToken: funcGetItem(this.accessTokenKey),
      refreshToken: funcGetItem(this.refreshTokenKey)
    }
  }

  setUserId(id: string | null): void {
    id ? funcSetItem(this.userIdKey, id) : funcRemoveItem(this.userIdKey);
  }
}
