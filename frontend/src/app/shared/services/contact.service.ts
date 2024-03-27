import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DefaultResponseType} from "../../../types/default-response.type";
import {environment} from "../../../environments/environment";
import {ContactDataType} from "../../../types/contact-data-type";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private http: HttpClient = inject(HttpClient);

  contact(data: ContactDataType): Observable<DefaultResponseType> {
    return this.http.post<DefaultResponseType>(environment.api + 'contact', data)
  };
}
