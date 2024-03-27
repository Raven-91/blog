import {Component, ElementRef, EventEmitter, HostListener, inject, Input, Output, ViewChild} from '@angular/core';
import {AccordionDataType} from "../../../../types/accordion-data-type";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageService} from "../../services/language.service";
import {toggleLanguage} from "../../../utils/shared";

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  languageService: LanguageService = inject(LanguageService);
  protected readonly toggleLanguage = toggleLanguage;

  @Input() accordionData: AccordionDataType[] | undefined | null = null;
  @Output() paramsForSearch: EventEmitter<string[]> = new EventEmitter<string[]>();
  @ViewChild('accordion') accordion!: ElementRef;

  checkboxes: HTMLInputElement[] | undefined | null = null;
  openAccordion: boolean = false;

  toggleAccordion(): void {
    this.openAccordion = !this.openAccordion;
  }

  getSearchParams(): void {
    this.checkboxes = Array.from(document.getElementsByClassName("accordion__input") as HTMLCollectionOf<HTMLInputElement>);
    let sortedRange: string[] = [];
    this.checkboxes.filter((item: HTMLInputElement) => {
      return item.checked ? sortedRange.push(item.value) : false;
    });
    if (sortedRange && sortedRange.length > 0) {
      this.paramsForSearch.emit(sortedRange);
    }
  }

  @HostListener('window:click', ['$event'])
  documentClick(event: Event): void {
    if (!this.accordion.nativeElement.contains(event.target)) {
      this.openAccordion = false;
    }
  }
}
