import {Component, inject, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {RatingComponent} from "../rating/rating.component";
import {ArticleType} from "../../../../types/article-type";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageService} from "../../services/language.service";
import {toggleLanguage} from "../../../utils/shared";

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [
    RouterLink,
    RatingComponent,
    TranslateModule
  ],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.scss'
})
export class ArticleItemComponent {
  languageService: LanguageService = inject(LanguageService);
  @Input() item: ArticleType | undefined;
  @Input() relativesArticle: boolean = false;
  protected readonly toggleLanguage = toggleLanguage;

  isLogged: boolean = true;

}
