import { Component, Input } from '@angular/core';
import { PageTitleComponent } from "../../shared/page-title/page-title.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { UsersGridComponent } from "./users-grid/users-grid.component";
import { LucideAngularModule, LUCIDE_ICONS, LucideIconProvider, icons } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [PageTitleComponent, UsersListComponent, UsersGridComponent, LucideAngularModule,CommonModule],
  templateUrl: './user.component.html',
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class UserComponent {
    isListView:boolean = true;

    onViewChange()
    {
this.isListView = !this.isListView
    }
}
