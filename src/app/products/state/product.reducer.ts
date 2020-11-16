import { createAction, createReducer, on } from '@ngrx/store';

export const productReducer = createReducer(
    { showProductFlag: true },
    on(createAction('[Product] Toggle Product Code'), state => {
        return {
            ...state,
            showProductFlag: !state.showProductFlag
        };
    })
);
