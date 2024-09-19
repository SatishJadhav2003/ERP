import { createAction, props } from '@ngrx/store';
import {  UserListModel } from './user-model';
import { User } from '../../shared/model/user.model';

export const fetchUserListData = createAction('[Data] Fetch UserList');
export const fetchUserListSuccess = createAction('[Data] Fetch UserList Success',props<{ UserList: UserListModel[] }>());
export const fetchUserListFailure = createAction('[Data] Fetch UserList Failure', props<{ error: string }>());
export const addUser = createAction('[Data] Add User',props<{userObj:User}>());