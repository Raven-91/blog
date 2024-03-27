import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {TableComponent} from "../../../shared/common/table/table.component";
import {PageParamsEnum} from "../../../../types/page-params-enum";
import {UserInfoType} from "../../../../types/user-info-type";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    TableComponent
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent implements OnInit {
  page: string = PageParamsEnum.admin;
  usersData: UserInfoType[] = [];

  ngOnInit() {
    //TODO: запрос на данные пользователей
    this.usersData = [
      {
        id: '1',
        firstName: 'Igor',
        lastName: 'Petrov',
        email: 'petrov.me@gmail.com',
        urlImage: 'user-photo.png',
        userStatus: {
          en: 'author',
          ru: 'автор'
        },
        isAdmin: true,
        userAdmin: {
          en: 'admin',
          ru: 'администратор'
        },
        status: {
          isActivated: true,
          isBlocked: false,
        }
      },
      {
        id: '2',
        firstName: 'Josh',
        lastName: 'Petrov',
        email: 'petrov.me@gmail.com',
        urlImage: 'user-photo.png',
        userStatus: {
          en: 'author',
          ru: 'автор'
        },
        isAdmin: true,
        userAdmin: {
          en: 'admin',
          ru: 'администратор'
        },
        status: {
          isActivated: true,
          isBlocked: false,
        }
      },
      {
        id: '3',
        firstName: 'Bill',
        lastName: 'Petrov',
        email: 'petrov.me@gmail.com',
        urlImage: 'user-photo.png',
        userStatus: {
          en: 'author',
          ru: 'автор'
        },
        isAdmin: true,
        userAdmin: {
          en: 'admin',
          ru: 'администратор'
        },
        status: {
          isActivated: true,
          isBlocked: false,
        }
      },
      {
        id: '4',
        firstName: 'Alex',
        lastName: 'Petrov',
        email: 'petrov.me@gmail.com',
        urlImage: 'user-photo.png',
        userStatus: {
          en: 'author',
          ru: 'автор'
        },
        isAdmin: true,
        userAdmin: {
          en: 'admin',
          ru: 'администратор'
        },
        status: {
          isActivated: true,
          isBlocked: false,
        }
      }
    ]
  }

}
