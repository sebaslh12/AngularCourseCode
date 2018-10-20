import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { from } from 'rxjs'
import * as firebase from 'firebase';

import * as AuthActions from './auth.actions';
@Injectable()
export class AuthEffects {
    @Effect()
    authSignUp = this.actions$.ofType(AuthActions.TRY_SIGNUP)
        .pipe(
            map((action: AuthActions.TrySignUp) => {
                return action.pTrySignUpyload;
            })
            , switchMap((authData: { username: string, password: string }) => {
                return from(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password))
            }),
            switchMap(() => {
                return from(firebase.auth().currentUser.getIdToken())
            }),
            mergeMap((token: string) => {
                return [
                    {
                        type: AuthActions.SIGNUP
                    },
                    {
                        type: AuthActions.SET_TOKEN,
                        payload: token
                    }
                ]
            })
        );

    constructor(private actions$: Actions) { }
}