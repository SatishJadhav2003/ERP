import { Component, Input } from '@angular/core';
import { icons, LUCIDE_ICONS, LucideAngularModule, LucideIconProvider } from 'lucide-angular';

@Component({
  selector: 'app-page-title',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './page-title.component.html',
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class PageTitleComponent {
  @Input() title: string | undefined;
  @Input() pagetitle: string | undefined;
}
