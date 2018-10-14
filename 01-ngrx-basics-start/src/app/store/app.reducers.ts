import * as fromShoppingList from "../shopping-list/store/shoping-list.reducers";
import * as fromAuthState from "../auth/store/auth.reducers";
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
    shoppingList: fromShoppingList.State;
    auth: fromAuthState.State;
}


export function authReducer(state, action ){
    return state;
}

export const reducers: ActionReducerMap<AppState> = { 
    shoppingList: fromShoppingList.shoppingListReducer, 
    auth: fromAuthState.authReducer 
}