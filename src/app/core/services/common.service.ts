import { inject, Injectable } from '@angular/core';
import { ApirequestService } from './apirequest.service';
import { Observable } from 'rxjs';
import { Module } from '../../shared/model/module.model';

@Injectable({ providedIn: 'root' })
export class CommonService {
  apiRequest = inject(ApirequestService);

  getModuleList(): Observable<Module[]> {
    return this.apiRequest.get('/Module');
  }
}
