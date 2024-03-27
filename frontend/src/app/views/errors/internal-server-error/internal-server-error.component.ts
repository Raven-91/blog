import {Component, inject, OnInit} from '@angular/core';
import {ThemeService} from "../../../shared/services/theme.service";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {LanguageService} from "../../../shared/services/language.service";

@Component({
  selector: 'app-internal-server-error',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './internal-server-error.component.html',
  styleUrl: './internal-server-error.component.scss'
})
export class InternalServerErrorComponent implements OnInit {
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
