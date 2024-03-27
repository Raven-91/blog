import {Routes} from '@angular/router';
import {FavoritesComponent} from "./favorites/favorites.component";
import {ProjectsComponent} from "./projects/projects.component";
import {PersonalAccountComponent} from "./personal-account.component";
import {ProjectComponent} from "./project/project.component";
import {CreateArticleComponent} from "./create-item/create-article.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";

export const routes: Routes = [
  {
    path: 'personal-area', component: PersonalAccountComponent
  },
  {
    path: 'favorites', component: FavoritesComponent
  },
  {
    path: 'projects', component: ProjectsComponent,
  },
  {
    path: 'project', component: ProjectComponent,
  },
  {
    path: 'create-article', component: CreateArticleComponent,
  },
  {
    path: 'admin-dashboard', component: AdminDashboardComponent,
  },
];
