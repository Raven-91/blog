import {Component, inject, OnInit} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {UserInfoType} from "../../../types/user-info-type";
import {environment} from "../../../environments/environment";
import {RouterLink} from "@angular/router";
import {NgStyle} from "@angular/common";
import {LanguageService} from "../../shared/services/language.service";
import {toggleLanguage} from "../../utils/shared";

@Component({
  selector: 'app-personal-area',
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink,
    NgStyle
  ],
  templateUrl: './personal-account.component.html',
  styleUrl: './personal-account.component.scss'
})
export class PersonalAccountComponent implements OnInit {
  serverStaticPath = environment.serverStaticPath;
  languageService: LanguageService = inject(LanguageService);
  protected readonly toggleLanguage = toggleLanguage;

  userData: UserInfoType = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    urlImage: '',
    userStatus: {
      en: '',
      ru: '',
    },
    isAdmin: false,
    userAdmin: {
      en: '',
      ru: ''
    },
    status: {
      isActivated: true,
      isBlocked: false,
    }
  };

  ngOnInit() {
    //TODO: запрос на данные пользователя
    this.userData = {
      id: '1',
      firstName: 'Igor',
      lastName: 'Petrov',
      email: 'petrov.me@gmail.com',
      urlImage: 'user-photo.png',
      userStatus: {
        en: 'author',
        ru: 'автор'
      },
      isAdmin: true,
      userAdmin: {
        en: 'admin',
        ru: 'администратор'
      },
      status: {
        isActivated: true,
        isBlocked: false,
      }
    }
  }
}
