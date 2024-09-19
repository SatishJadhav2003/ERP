import { Injectable } from "@angular/core";

import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from "@ngrx/effects";

import { UserService } from "../../core/services/user.service";
import {  fetchUserListData, fetchUserListFailure, fetchUserListSuccess } from "./user-action";


@Injectable()
export class UserEffects {
    fetchList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchUserListData),
            mergeMap(() =>
                this.userService.getAll().pipe(
                    map((UserList) => fetchUserListSuccess({ UserList })),
                    catchError((error) =>
                        of(fetchUserListFailure({ error }))
                    )
                )
            ),
        ),
    )


   

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }
}
