import { ActionReducerMap } from "@ngrx/store";
import { LayoutState, layoutReducer } from "./layout/layout-reducers";
import { EcommerceReducer, EcommerceState } from "./Ecommerce/ecommerce-reducer";
import { UserReducer, UserState } from "./User/user-reducer";


export interface RootReducerState {
    layout: LayoutState,
    // authentication: AuthenticationState;
    Ecommerce: EcommerceState,
    User: UserState,
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
    layout: layoutReducer,
    // authentication: authenticationReducer,
    Ecommerce: EcommerceReducer,
    User: UserReducer,
}