import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {LanguageType} from "../../../../../types/language-type";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent implements OnInit {
  @Input() languages: LanguageType[] = [];
  @Output() switchLanguage: EventEmitter<string> = new EventEmitter<string>();

  currentLanguage: LanguageType | null = null;
  selectOpened: boolean = false;

  ngOnInit(): void {
    this.languages.forEach((item: LanguageType): void => {
      if (item.selected) {
        this.currentLanguage = item;
        this.switchLanguage.emit(item.value);
      }
    });
  };

  toggleSelect(): void {
    this.selectOpened = !this.selectOpened;
  }

  selectLanguage(language: LanguageType): void {
    if (language.selected) {
      return;
    } else {
      this.languages.filter((item: LanguageType): void => {
        if (item.language === language.language) {
          this.currentLanguage = item;
          item.selected = true;
          this.switchLanguage.emit(item.value);
        } else {
          item.selected = false;
        }
      });
    }
  }

  @ViewChild('select') select!: ElementRef;

  @HostListener('window:click', ['$event'])
  documentClick(event: Event): void {
    if (!this.select.nativeElement.contains(event.target)) {
      this.selectOpened = false;
    }
  }
}
