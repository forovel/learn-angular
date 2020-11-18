import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductState } from './product.state';

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShownProductCodeSelector = createSelector(
    getProductFeatureState,
    state => state.showProductCode
);

export const getCurrentProductIdSelector = createSelector(
    getProductFeatureState,
    state => state.currentProductId
);

export const getCurrentProductSelector = createSelector(
    getProductFeatureState,
    getCurrentProductIdSelector,
    (state, currentProductId) => {
        if (currentProductId === 0) {
            return {
                id: 0,
                productName: '',
                productCode: 'New',
                description: '',
                starRating: 0
            };
        } else {
            return currentProductId ? state.products.find(product => product.id === currentProductId) : null;
        }
    }
);

export const getProductsSelector = createSelector(
    getProductFeatureState,
    state => state.products
);

export const getListProductsError = createSelector(
    getProductFeatureState,
    state => state.productListError
);

export const getSingleProductError = createSelector(
    getProductFeatureState,
    state => state.singleProductError
);
