import { createReducer, on } from '@ngrx/store';

import * as ProductActions from './product.actions';
import { ProductState } from './product.state';

const initialState: ProductState = {
    showProductCode: true,
    currentProductId: null,
    products: [],
    productListError: '',
    singleProductError: ''
};

export const productReducer = createReducer<ProductState>(
    initialState,
    on(ProductActions.toggleProductCode, (state): ProductState => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        };
    }),
    on(ProductActions.setCurrentProductId, (state, action): ProductState => {
        return {
            ...state,
            currentProductId: action.currentProductId
        };
    }),
    on(ProductActions.clearCurrentProductId, (state): ProductState => {
        return {
            ...state,
            currentProductId: null
        };
    }),
    on(ProductActions.initializeCurrentProductId, (state): ProductState => {
        return {
            ...state,
            currentProductId: 0
        };
    }),
    on(ProductActions.loadProductsSuccess, (state, action): ProductState => {
        return {
            ...state,
            products: action.products,
            productListError: ''
        };
    }),
    on(ProductActions.loadProductsFailure, (state, action): ProductState => {
        return {
            ...state,
            products: [],
            productListError: action.error
        };
    }),
    on(ProductActions.createProductSuccess, (state, action): ProductState => {
        return {
            ...state,
            products: [...state.products, action.product],
            currentProductId: action.product.id,
            singleProductError: ''
        };
    }),
    on(ProductActions.createProductFailure, (state, action): ProductState => {
        return {
            ...state,
            currentProductId: null,
            singleProductError: action.error
        };
    }),
    on(ProductActions.updateProductSuccess, (state, action): ProductState => {
        const updatedProducts = state.products.map(item => item.id === action.product.id ? action.product : item);
        return {
            ...state,
            products: updatedProducts,
            currentProductId: action.product.id,
            singleProductError: ''
        };
    }),
    on(ProductActions.updateProductFailure, (state, action): ProductState => {
        return {
            ...state,
            currentProductId: null,
            singleProductError: action.error
        };
    }),
    on(ProductActions.deleteProductSuccess, (state, action): ProductState => {
        return {
            ...state,
            products: state.products.filter(product => product.id !== action.productId),
            currentProductId: null,
            singleProductError: ''
        };
    }),
    on(ProductActions.deleteProductFailure, (state, action): ProductState => {
        return {
            ...state,
            currentProductId: action.productId,
            singleProductError: action.error
        };
    })
);
