import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private languagePage: string = 'en';

  getLanguagePage(): string {
    return this.languagePage;
  }

  setLanguagePage(currentLanguagePage: string): void {
    this.languagePage = currentLanguagePage;
  }
}
