import {Component, CUSTOM_ELEMENTS_SCHEMA, inject, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {SliderDataType} from "../../../../types/slider-data-type";
import {environment} from "../../../../environments/environment";
import {LanguageService} from "../../../shared/services/language.service";
import {toggleLanguage} from "../../../utils/shared";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    RouterLink
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  languageService: LanguageService = inject(LanguageService);
  serverStaticPath = environment.serverStaticPath;
  protected readonly toggleLanguage = toggleLanguage;
  @Input() data: SliderDataType[] = [];
}
