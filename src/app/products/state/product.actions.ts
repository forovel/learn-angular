import { createAction, props } from '@ngrx/store';

import { Product } from '../product';
import { PRODUCTS_ACTION_TYPES } from './product.action-types';

export const toggleProductCode = createAction(
    PRODUCTS_ACTION_TYPES.PRODUCTS_TOGGLE_PRODUCT_CODE
);

export const setCurrentProduct = createAction(
    PRODUCTS_ACTION_TYPES.PRODUCTS_SET_CURRENT_PRODUCT,
    props<{ product: Product }>()
);

export const clearCurrentProduct = createAction(
    PRODUCTS_ACTION_TYPES.PRODUCTS_CLEAR_CURRENT_PRODUCT
);

export const initCurrentProduct = createAction(
    PRODUCTS_ACTION_TYPES.PRODUCTS_INIT_CURRENT_PRODUCT
);

export const loadProducts = createAction(
    PRODUCTS_ACTION_TYPES.PRODUCTS_LIST_PRODUCTS
);

export const loadProductsSuccess = createAction(
    PRODUCTS_ACTION_TYPES.PRODUCTS_LOAD_PRODUCTS_SUCCESS,
    props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
    PRODUCTS_ACTION_TYPES.PRODUCTS_LOAD_PRODUCTS_FAILURE,
    props<{ error: string }>()
);
