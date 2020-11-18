import { createAction, props } from '@ngrx/store';

import { Product } from '../product';
import { PRODUCTS_ACTION_TYPES } from './product.action-types';

export const toggleProductCode = createAction(
    PRODUCTS_ACTION_TYPES.PRODUCTS_TOGGLE_PRODUCT_CODE
);

export const setCurrentProductId = createAction(
    PRODUCTS_ACTION_TYPES.PRODUCTS_SET_CURRENT_PRODUCT,
    props<{ currentProductId: number }>()
);

export const clearCurrentProductId = createAction(
    PRODUCTS_ACTION_TYPES.PRODUCTS_CLEAR_CURRENT_PRODUCT
);

export const initializeCurrentProductId = createAction(
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

export const createProduct = createAction(
    PRODUCTS_ACTION_TYPES.PRODUCTS_CREATE_PRODUCT,
    props<{ product: Product }>()
);

export const createProductSuccess = createAction(
    PRODUCTS_ACTION_TYPES.PRODUCTS_CREATE_PRODUCT_SUCCESS,
    props<{ product: Product }>()
);

export const createProductFailure = createAction(
    PRODUCTS_ACTION_TYPES.PRODUCTS_CREATE_PRODUCT_FAILURE,
    props<{ error: string }>()
);

export const updateProduct = createAction(
    PRODUCTS_ACTION_TYPES.PRODUCTS_UPDATE_PRODUCT,
    props<{ product: Product }>()
);

export const updateProductSuccess = createAction(
    PRODUCTS_ACTION_TYPES.PRODUCTS_UPDATE_PRODUCT_SUCCESS,
    props<{ product: Product }>()
);

export const updateProductFailure = createAction(
    PRODUCTS_ACTION_TYPES.PRODUCTS_UPDATE_PRODUCT_FAILURE,
    props<{ error: string }>()
);

export const deleteProduct = createAction(
    PRODUCTS_ACTION_TYPES.PRODUCTS_DELETE_PRODUCT,
    props<{ productId: number }>()
);

export const deleteProductSuccess = createAction(
    PRODUCTS_ACTION_TYPES.PRODUCTS_DELETE_PRODUCT_SUCCESS,
    props<{ message: string; productId: number }>()
);

export const deleteProductFailure = createAction(
    PRODUCTS_ACTION_TYPES.PRODUCTS_DELETE_PRODUCT_FAILURE,
    props<{ error: string; productId: number }>()
);
