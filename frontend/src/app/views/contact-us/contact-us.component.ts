import {Component, inject} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {
  catchErrorAndShowMessage,
  getInputValue,
  isValidInput,
  openToastErrorMessage, openToastSuccessMessage, toggleLanguage
} from "../../utils/shared";
import {ContactService} from "../../shared/services/contact.service";
import {ContactDataType} from "../../../types/contact-data-type";
import {DefaultResponseType} from "../../../types/default-response.type";
import {HttpErrorResponse} from "@angular/common/http";
import {errorsMessagesData} from "../../data/errors-messages-data";
import {HotToastService} from "@ngneat/hot-toast";
import {LanguageService} from "../../shared/services/language.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    TranslateModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  private fb: FormBuilder = inject(FormBuilder);
  private contactService: ContactService = inject(ContactService);
  private toastService: HotToastService = inject(HotToastService);
  private languageService: LanguageService = inject(LanguageService);
  private router: Router = inject(Router);

  protected readonly isValidInput = isValidInput;
  protected readonly getInputValue = getInputValue;

  contactUsForm: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  })

  sendMessage(): void {
    const data: ContactDataType = {
      email: this.contactUsForm.value.email,
      subject: this.contactUsForm.value.subject,
      message: this.contactUsForm.value.message
    }

    if (this.contactUsForm.valid && data.email && data.subject && data.message) {
      this.contactService.contact(data).subscribe({
        next: (data: DefaultResponseType): void => {
          if ((data as DefaultResponseType).error && (data as DefaultResponseType).message) {
            openToastErrorMessage(this.languageService, this.toastService, (data as DefaultResponseType).message);
            throw new Error(toggleLanguage(this.languageService, (data as DefaultResponseType).message));
          } else {
            openToastSuccessMessage(this.languageService, this.toastService, (data as DefaultResponseType).message);
            this.router.navigate(['/']);
          }
        },
        error: (errorResponse: HttpErrorResponse): void => {
          catchErrorAndShowMessage(errorResponse, this.toastService, this.languageService, errorsMessagesData['contactErrorMessage']);
        }
      })
    }

  }
}
