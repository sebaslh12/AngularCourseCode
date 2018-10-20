import { Action } from '@ngrx/store';

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';
export const IS_AUTHENTICATED = 'IS_AUTHENTICATED';

export class TrySignUp implements Action {
    readonly type = TRY_SIGNUP;
    constructor(public pTrySignUpyload: { username: string, password: string }) { }
}

export class SignUp implements Action {
    readonly type = SIGNUP;
}

export class SignIn implements Action {
    readonly type = SIGNIN;
}

export class LogOut implements Action {
    readonly type = LOGOUT;
}

export class SetToken implements Action {
    readonly type = SET_TOKEN;
    constructor(public payload: string) { }
}

export type AuthActions = SignIn | SignUp | LogOut | SetToken | TrySignUp ;