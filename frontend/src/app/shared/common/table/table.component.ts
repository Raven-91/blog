import {Component, inject, Input, OnInit} from '@angular/core';
import {toggleLanguage} from "../../../utils/shared";
import {PopupComponent} from "../popup/popup.component";
import {LanguageService} from "../../services/language.service";
import {PopupParamsEnum} from "../../../../types/popup-params-enum";
import {UserProjectData} from "../../../../types/user-project-data";
import {Router, RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {PageParamsEnum} from "../../../../types/page-params-enum";
import {ArticleType} from "../../../../types/article-type";
import {SelectComponent} from "../../layout/header/select/select.component";
import {ActionsEnum} from "../../../../types/actions-enum";
import {AccordionComponent} from "../accordion/accordion.component";
import {NgClass} from "@angular/common";
import {UserInfoType} from "../../../../types/user-info-type";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    PopupComponent,
    RouterLink,
    TranslateModule,
    SelectComponent,
    AccordionComponent,
    NgClass
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
  languageService: LanguageService = inject(LanguageService);
  router: Router = inject(Router);
  protected readonly toggleLanguage = toggleLanguage;
  protected readonly PageParamsEnum = PageParamsEnum;
  protected readonly PopupParamsEnum = PopupParamsEnum;
  parentSelector: boolean = false;
  isEdited: boolean = false;
  isDeleted: boolean = false;
  openPopup: boolean = false;
  popupParam: string = '';
  numberOfItems: number = 0;
  selectedItems: any[] = [];
  data: UserProjectData[] | ArticleType[] | UserInfoType[] = [];

  @Input() subjects: UserProjectData[] = [];
  @Input() articles: ArticleType[] = [];
  @Input() usersData: UserInfoType[] = [];
  @Input() page: string = '';

  ngOnInit(): void {
    this.defineDataForPage(this.page);
  }

  toggleCheckbox(event: Event): void {
    const id: string = (event.target as HTMLInputElement).value;
    const isChecked: boolean = (event.target as HTMLInputElement).checked;
    this.parentSelector = false;
    this.data.map((item: UserProjectData | ArticleType | UserInfoType): UserProjectData | ArticleType | UserInfoType => {
      if (item.id === id) {
        item.selected = isChecked;
        return item;
      }
      return item;
    });
    this.isSelectedItems();
  }

  selectAllCheckbox(): void {
    this.parentSelector = !this.parentSelector;
    this.data.forEach((item: UserProjectData | ArticleType | UserInfoType): void => {
      item.selected = this.parentSelector;
    });
    this.isSelectedItems();
  }

  isSelectedItems(): void {
    this.selectedItems = this.data.filter((item: UserProjectData | ArticleType | UserInfoType):
      UserProjectData | ArticleType | UserInfoType | undefined => {
      if (item.selected) {
        return item;
      }
      return;
    });
    this.toggleDisableButtons(this.selectedItems);
  }

  private toggleDisableButtons(selectedItems: UserProjectData[] | ArticleType[]): void {
    if (selectedItems && selectedItems.length < 1) {
      this.isEdited = false;
      this.isDeleted = false;
    } else if (selectedItems && selectedItems.length === 1) {
      this.isEdited = true;
      this.isDeleted = true;
    } else if (selectedItems && selectedItems.length > 1) {
      this.isEdited = false;
      this.isDeleted = true;
    }
  }

  buttonClick(value: string): void {
    this.openPopup = true;
    this.popupParam = value;
    // TODO: Для удаления
    if (this.selectedItems && this.selectedItems.length > 0) {
      this.numberOfItems = this.selectedItems.length;
    }
  }

  executeAction(action: string) {
    if (action === ActionsEnum.createItem) {
      if (this.page === PageParamsEnum.subjects) {
        // TODO: отправка названия новой темы
      }
      if (this.page === PageParamsEnum.articles) {
        // TODO: отправка названия новой статьи и переход на стр создания статьи
        this.router.navigate(['/create-article']);
      }
    }
    if (action === ActionsEnum.editItemName) {
      if (this.page === PageParamsEnum.subjects) {
        // TODO: отправка отредактированного названия темы
      }
      if (this.page === PageParamsEnum.articles) {
        // TODO: отправка отредактированного названия статьи
      }
    }
    if (action === ActionsEnum.editItem) {
      if (this.page === PageParamsEnum.articles) {
        // TODO: переход на редактирование определенной статьи
        this.router.navigate(['/create-article']);
      }
    }
    if (action === ActionsEnum.deleteItem) {
      if (this.page === PageParamsEnum.subjects) {
        // TODO: удаление темы
      }
      if (this.page === PageParamsEnum.articles) {
        // TODO: удаление статьи
      }
    }
  }

  renewStatusOpenModal(event: boolean): void {
    this.openPopup = event;
  }

  getAction(event: string): void {
    this.executeAction(event);
  }

  private defineDataForPage(page: string): UserProjectData[] | ArticleType[] | UserInfoType[] | undefined {
    switch (page) {
      case PageParamsEnum.subjects:
        return this.data = this.subjects;
      case PageParamsEnum.articles:
        return this.data = this.articles;
      case PageParamsEnum.admin:
       return this.data = this.usersData;
    }
    return undefined;
  }

  search(event: string[]): void {

  }

  publish() {

  }

  unPublish() {

  }
}
