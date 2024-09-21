import { Route } from '@angular/router';
import { UserComponent } from './user/user.component';

export const UserRoutes: Route[] = [
  {
    path: 'users-list',
    component: UserComponent,
  },
  {
    path: '**',
    redirectTo: 'pages-404',
    pathMatch: 'full',
  },
];
