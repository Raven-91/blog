import {
  AfterViewChecked,
  Component, ElementRef,
  inject,
  OnInit,
  ViewChild
} from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {MarkdownComponent} from "ngx-markdown";
import {ThemeService} from "../../../shared/services/theme.service";
import {EditorComponent, EditorModule} from "@tinymce/tinymce-angular";
import {LanguageService} from "../../../shared/services/language.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {getInputValue, isValidInput} from "../../../utils/shared";
import {NgClass} from "@angular/common";

declare let Datepicker: any;
const ruLang = {
  days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
  daysShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб"],
  daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
  monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
  today: "Сегодня",
  clear: "Очистить",
  format: "dd.mm.yyyy",
  weekStart: 1,
  monthsTitle: 'Месяцы'
};
Datepicker.locales.ru = ruLang;

@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    MarkdownComponent,
    EditorModule,
    EditorComponent,
    FormsModule,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.scss'
})

export class CreateArticleComponent implements OnInit, AfterViewChecked {
  private languageService: LanguageService = inject(LanguageService);
  private themeService: ThemeService = inject(ThemeService);
  private fb: FormBuilder = inject(FormBuilder);
  protected readonly isValidInput = isValidInput;
  protected readonly getInputValue = getInputValue;
  datepicker: HTMLInputElement | null = null;

  settings = {
    skin: '',
    contentCss: '',
  };
  isDarkMode: boolean = false;
  lang: string = 'en';

  @ViewChild('contentEn') contentEn!: EditorComponent;
  @ViewChild('contentRu') contentRu!: EditorComponent;
  @ViewChild('datePickerInput') datePickerInput!: ElementRef<HTMLInputElement>;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  @ViewChild('valueFileInput') valueFileInput!: ElementRef<HTMLElement>;

  contentForm: FormGroup = this.fb.group({
    author: ['', Validators.required],
    date: ['', Validators.required],
    subjectEn: ['', [Validators.required, Validators.pattern(/^[?!,-.+/()*:;@#a-zA-Z0-9\s]+$/)]],
    subjectRu: ['', [Validators.required, Validators.pattern(/^[?!,-.+/()*:;@#а-яА-ЯёЁ0-9\s]+$/)]],
    titleEn: ['', [Validators.required, Validators.pattern(/^[?!,-.+/()*:;@#a-zA-Z0-9\s]+$/)]],
    titleRu: ['', [Validators.required, Validators.pattern(/^[?!,-.+/()*:;@#а-яА-ЯёЁ0-9\s]+$/)]],
    image: ['', Validators.required],
    descriptionEn: ['', Validators.required],
    descriptionRu: ['', Validators.required],
    contentEn: ['', Validators.required],
    contentRu: ['', Validators.required],
    tags: ['', Validators.required],
  });

  getContentFromEditor(): void {
    console.log(this.contentForm.controls['author'].value);
    this.contentForm.controls['date'].setValue(
      this.datePickerInput.nativeElement.value
    );
    console.log(this.contentForm.controls['date'].value);
    console.log(this.contentForm.controls['subjectEn'].value);
    console.log(this.contentForm.controls['subjectRu'].value);
    console.log(this.contentForm.controls['titleEn'].value);
    console.log(this.contentForm.controls['titleRu'].value);
    console.log(this.contentForm.controls['image'].value);
    console.log(this.contentForm.controls['descriptionEn'].value);
    console.log(this.contentForm.controls['descriptionRu'].value);
    console.log(this.contentForm.controls['contentEn'].value);
    console.log(this.contentForm.controls['contentRu'].value);
    console.log(this.contentForm.controls['tags'].value);
  }

  ngOnInit(): void {
    this.isDarkMode = this.themeService.isDarkMode();
    this.lang = this.languageService.getLanguagePage();
    this.setupEditorTheme(this.isDarkMode);
    this.initDatepicker();
  }

  initDatepicker(): void {
    this.datepicker = document.getElementById('datepicker') as HTMLInputElement;
    if (this.datepicker) {
      new Datepicker(this.datepicker, {
        autohide: true,
        format: 'dd.mm.yyyy',
        language: this.setupDatepickerLang(),
      });
    }
  }

  setupDatepickerLang(): 'en' | 'ru' {
    if (this.lang === 'ru') {
      return 'ru';
    } else {
      return 'en';
    }
  }

  setupEditorTheme(isDarkMode: boolean): void {
    isDarkMode ? this.settings = {skin: 'oxide-dark', contentCss: 'dark'} : this.settings = {
      skin: 'oxide',
      contentCss: 'default'
    };
  }

  ngAfterViewChecked(): void {
    this.themeService.isDarkMode$.subscribe((isDarkMode: boolean): void => {
      if (this.isDarkMode !== isDarkMode) {
        this.isDarkMode = isDarkMode;
        this.themeService.setEditorTheme(this.contentEn);
        this.themeService.setEditorTheme(this.contentRu);
      }
    });

    if (this.lang !== this.languageService.getLanguagePage()) {
      this.lang = this.languageService.getLanguagePage();
      this.initDatepicker();
    }
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
    this.contentForm.controls['image']?.markAsDirty();
    this.contentForm.controls['image']?.markAsTouched();
  }

  setValueFileInput(): void {
    this.valueFileInput.nativeElement.textContent = this.fileInput.nativeElement.value.replace(/C:\\fakepath\\/i, '');
  }
}
