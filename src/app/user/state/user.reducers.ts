import { createAction, createReducer, on } from '@ngrx/store';
import { UserState } from './user.state';

const initialState: UserState = {
    maskUserName: false,
    currentUser: null,
    users: []
};

export const userReducer = createReducer<UserState>(
    initialState,
    on(createAction('[User] Toggle User Name Mask'), (state): UserState => {
        return {
            ...state,
            maskUserName: !state.maskUserName
        };
    })
);
