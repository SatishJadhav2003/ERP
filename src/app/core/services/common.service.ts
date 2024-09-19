import { inject, Injectable } from "@angular/core";
import { ApirequestService } from "./apirequest.service";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CommonService {
apiRequest = inject(ApirequestService);


getTestingTypeList():Observable<any>
{
    return this.apiRequest.get('');
}
}