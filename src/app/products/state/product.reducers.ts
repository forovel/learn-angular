import { createAction, createReducer, on } from '@ngrx/store';

import { ProductState } from './product.state';

const initialState: ProductState = {
    showProductCode: true,
    currentProduct: null,
    products: []
};

export const productReducer = createReducer<ProductState>(
    initialState,
    on(createAction('[Product] Toggle Product Code'), (state): ProductState => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        };
    })
);
