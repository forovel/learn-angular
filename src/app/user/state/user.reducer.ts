import { createAction, createReducer, on } from '@ngrx/store';

export const userReducer = createReducer(
    { isUserMaskOn: true },
    on(createAction('[User] Toggle User Name Mask'), state => {
        return {
            ...state,
            isUserMaskOn: !state.isUserMaskOn
        };
    })
);
