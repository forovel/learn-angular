import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductState } from './product.state';

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShownProductCodeSelector = createSelector(
    getProductFeatureState,
    state => state.showProductCode
);

export const getCurrentProductSelector = createSelector(
    getProductFeatureState,
    state => state.currentProduct
);

export const gutProductsSelector = createSelector(
    getProductFeatureState,
    state => state.products
);
