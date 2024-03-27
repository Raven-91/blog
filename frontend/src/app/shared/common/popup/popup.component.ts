import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {NgStyle} from "@angular/common";
import {PopupParamsEnum} from "../../../../types/popup-params-enum";
import {TranslateModule} from "@ngx-translate/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {getInputValue, isValidInput} from "../../../utils/shared";
import {PageParamsEnum} from "../../../../types/page-params-enum";
import {ActionsEnum} from "../../../../types/actions-enum";

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [
    NgStyle,
    TranslateModule,
    ReactiveFormsModule
  ],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  private fb: FormBuilder = inject(FormBuilder);
  protected readonly PageParamsEnum = PageParamsEnum;
  protected readonly PopupParamsEnum = PopupParamsEnum;
  protected readonly isValidInput = isValidInput;
  protected readonly getInputValue = getInputValue;
  protected readonly ActionsEnum = ActionsEnum;

  @Input() openPopup: boolean = false;
  @Input() popupParam: string = '';
  @Input() subjectPage: string = '';
  @Input() numberOfItems: number = 0;
  @Output() renewStatusOpenModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() action: EventEmitter<string> = new EventEmitter<string>();

  popupForm: FormGroup = this.fb.group({
    itemName: ['', Validators.required],
  });

  closeModal(): void {
    this.openPopup = false;
    this.renewStatusOpenModal.emit(false);
    this.popupForm.reset();
  }

  @ViewChild('popupWrapper') popupWrapper!: ElementRef;

  @HostListener('document:click', ['$event'])
  documentClick(event: Event): void {
    if (this.openPopup
      && this.popupWrapper.nativeElement.contains(event.target)
      && (event.target as HTMLElement).classList.contains('popup')) {
      this.closeModal();
    }
  }
}
