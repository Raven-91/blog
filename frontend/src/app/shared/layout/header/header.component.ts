import {Component, ElementRef, HostListener, inject, OnInit, ViewChild} from '@angular/core';
import {RouterLink} from "@angular/router";
import {LanguageType} from "../../../../types/language-type";
import {SelectComponent} from "./select/select.component";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {ThemeService} from "../../services/theme.service";
import {LanguageService} from "../../services/language.service";
import {HotToastService} from "@ngneat/hot-toast";
import {languageData} from "../../../data/language-data";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthService} from "../../../core/auth/auth.service";
import {catchErrorAndShowMessage, openToastInfoMessage} from "../../../utils/shared";
import {infoMessageData} from "../../../data/info-messages-data";
import {errorsMessagesData} from "../../../data/errors-messages-data";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    SelectComponent,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  private toastService: HotToastService = inject(HotToastService);
  private translateService: TranslateService = inject(TranslateService);
  private themeService: ThemeService = inject(ThemeService);
  private languageService: LanguageService = inject(LanguageService);
  private authService: AuthService = inject(AuthService);

  isDarkMode!: boolean;
  languagePage!: string;
  isLogged: boolean = false;
  activeMenu: boolean = false;
  activeUserMenu: boolean = false;
  languages: LanguageType[] = languageData;

  ngOnInit(): void {
    this.isDarkMode = this.themeService.isDarkMode();
    this.languagePage = this.languageService.getLanguagePage();
    this.isLogged = this.authService.getIsLoggedIn();
    this.authService.isLogged$.subscribe((isLoggedIn: boolean): void => {
      this.isLogged = isLoggedIn;
    });
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
  }

  translateContentPage(language: string): void {
    this.translateService.use(language.toLowerCase());
    this.languageService.setLanguagePage(language);
  }

  toggleMenu(): void {
    this.activeMenu = !this.activeMenu;
  }

  clickMenuItem(): void {
    this.activeMenu = false;
    this.activeUserMenu = false;
  }

  toggleUserMenu(): void {
    this.activeUserMenu = !this.activeUserMenu;
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: (): void => {
        this.doLogout();
      },
      error: (errorResponse: HttpErrorResponse): void => {
        catchErrorAndShowMessage(errorResponse, this.toastService, this.languageService, errorsMessagesData['logOutErrorMessage']);
        this.doLogout();
      }
    })
  }

  private doLogout(): void {
    this.authService.removeTokens();
    this.authService.setUserId(null);
    openToastInfoMessage(this.languageService, this.toastService, infoMessageData['logOutMessage']);
    this.activeUserMenu = false;
  }

  @HostListener('window:resize')
  closeMenu(): void {
    this.activeMenu = false;
    this.activeUserMenu = false;
  }

  @ViewChild('userMenu') userMenu: ElementRef | undefined | null;

  @HostListener('window:click', ['$event'])
  documentClick(event: Event): void {
    if (this.userMenu && !this.userMenu.nativeElement.contains(event.target) && this.activeUserMenu) {
      this.activeUserMenu = false;
    }
  }

  lastScroll: number = 0;
  defaultOffset: number = 200;
  hide: boolean = false;

  @HostListener('document:scroll') scrollFunction(): void {
    if ((window.scrollY || document.documentElement.scrollTop) > this.lastScroll &&
      (window.scrollY || document.documentElement.scrollTop) > this.defaultOffset) {
      this.hide = true;
    } else if ((window.scrollY || document.documentElement.scrollTop) < this.lastScroll && this.hide) {
      this.hide = false;
    }
    this.lastScroll = (window.scrollY || document.documentElement.scrollTop);
  }

  // TODO: Сделать поиск
  search() {

  }
}
