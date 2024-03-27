import {Routes} from '@angular/router';
import {MainComponent} from "./views/main/main.component";
import {LayoutComponent} from "./shared/layout/layout.component";
import {PageNotFoundComponent} from "./views/errors/page-not-found/page-not-found.component";
import {ContactUsComponent} from "./views/contact-us/contact-us.component";
import {ArticlePageComponent} from "./views/article-page/article-page.component";
import {PersonalAccountComponent} from "./views/personal-area/personal-account.component";
import {authForwardGuard} from "./core/guard/auth-forward.guard";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', component: MainComponent
      },
      {
        path: '',
        loadChildren: () => import('./views/users/users.routes').then((m) => m.routes),
        // canActivate: [authForwardGuard]
      },
      {
        path: 'contact', component: ContactUsComponent
      },
      {
        path: '',
        loadChildren: () => import('./views/personal-area/personal-account.routes').then((m) => m.routes),
        canActivate: [authForwardGuard]
      },
      {
        path: 'article', component: ArticlePageComponent
      },
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];
