import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { companyName } from '../../../app.config';

@Component({
  selector: 'app-login-cover',
  standalone: true,
  imports: [RouterModule,LucideAngularModule],
  templateUrl: './login-cover.component.html',
  styles: ``,
  providers:[{provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons)}]
})
export class LoginCoverComponent {
  companyName:string =companyName;
}
