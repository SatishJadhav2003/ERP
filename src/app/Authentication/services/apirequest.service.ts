import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })

export class ApirequestService { 
    apiurl: String;
    constructor(
        private http: HttpClient,
        private router: Router,
        private toaster: ToastrService
    ) {
        this.apiurl = environment.baseUrl;
    }


    appendAuthHeader(): Headers {
        const headers = new Headers({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
            'Access-Control-Allow-Methods': '*',
            "Content-Type": "application/json"
        });
        const token = localStorage.getItem('token');
        if (token !== null) {
            headers.append('Authorization', 'Bearer ' + token);
        }
        return headers;
    }

    getRequestOptions(urlParams?: HttpParams, body?: any) {
        const headers = this.appendAuthHeader();
        const options: any = {
            headers,
            body,
            params: urlParams,
            observe: 'response',
        };
        return options;
    }

    get(url: string, urlParams?: HttpParams): Observable<any> {
        const me = this;
        const requestOptions = {
            params: urlParams,
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };

        return this.http.get(this.apiurl + url, requestOptions).pipe(
            map((response: any) => {
                if (response.messageDataObj) {
                    if (response.messageDataObj.isErrorMessage) {
                        this.toaster.error(
                            response.messageDataObj.messageDetail,
                            response.messageDataObj.messageTitle
                        );
                        return;
                    } else {
                        return response.dataList;
                    }
                } else {
                    return response;
                }
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 || error.status === 403) {
                    me.router.navigate(['/logout']);
                } else if (error.status === 0) {
                    me.router.navigate(['/NotAccess']);
                }
                return throwError(error || 'Server error');
            })
        );
    }

    post(url: string, body: any): Observable<any> {
        const me = this;
        const requestOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };

        return this.http
            .post(this.apiurl + url, body, requestOptions)
            .pipe(
                map((resp: any) => resp),
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401) {
                        // console.log('In request option error block');
                        me.router.navigate(['']);
                    }
                    return throwError(error || 'Server error');
                })
            );
    }

    put(url: string, id: number, body: any): Observable<any> {
        const me = this;
        const requestOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };

        return this.http
            .put(this.apiurl + `${url}/${id}`, body, requestOptions)
            .pipe(
                map((resp: any) => resp),
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401) {
                        me.router.navigate(['/logout']);
                    }
                    return throwError(error || 'Server error');
                })
            );
    }

    delete(url: string, body: any): Observable<any> {
        const me = this;
        const requestOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            body: body,
        };

        return this.http
            .delete(this.apiurl + url, requestOptions)
            .pipe(
                map((resp: any) => resp),
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401) {
                        me.router.navigate(['/logout']);
                    }
                    return throwError(error || 'Server error');
                })
            );
    }
}
