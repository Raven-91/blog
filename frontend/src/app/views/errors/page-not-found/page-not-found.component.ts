import {Component, inject, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ThemeService} from "../../../shared/services/theme.service";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {LanguageService} from "../../../shared/services/language.service";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent implements OnInit {
  private themeService: ThemeService = inject(ThemeService);
  private translateService: TranslateService = inject(TranslateService);
  private languageService: LanguageService = inject(LanguageService);
  isDarkMode: boolean = false;

  constructor() {
    this.isDarkMode = this.themeService.isDarkMode();
  }

  ngOnInit(): void {
    this.themeService.isDarkMode$.subscribe((isDarkMode: boolean): void => {
      this.isDarkMode = isDarkMode;
    });
    this.translateService.use(this.languageService.getLanguagePage().toLowerCase());
  }
}
