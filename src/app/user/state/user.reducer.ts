import { createAction, createReducer, on } from '@ngrx/store';

import { UserState } from './user.state';
import * as UserActions from './user.action';

const initialState: UserState = {
    maskUserName: false,
    currentUser: null,
    users: []
};

export const userReducer = createReducer<UserState>(
    initialState,
    on(UserActions.maskUserName, (state): UserState => {
        return {
            ...state,
            maskUserName: !state.maskUserName
        };
    }),
    on(UserActions.setCurrentUser, (state, action) => {
        return {
            ...state,
            currentUser: action.currentUser
        };
    }),
    on(UserActions.clearCurrentUser, (state) => {
        return {
            ...state,
            currentUser: null
        };
    })
);
