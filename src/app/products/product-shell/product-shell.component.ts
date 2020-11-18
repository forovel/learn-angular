import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from '../product';
import { State } from '../state/product.state';
import * as ProductActions from '../state/product.actions';
import * as ProductSelectors from '../state/product.selectors';

@Component({
  templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit {
  products$: Observable<Product[]>;
  selectedProduct$: Observable<Product>;
  displayCode$: Observable<boolean>;
  errorListProductsMessage$: Observable<string>;
  errorSingleProductsMessage$: Observable<string>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadProducts());
    this.products$ = this.store.select(ProductSelectors.getProductsSelector);
    this.errorListProductsMessage$ = this.store.select(ProductSelectors.getListProductsError);
    this.errorSingleProductsMessage$ = this.store.select(ProductSelectors.getSingleProductError);
    this.selectedProduct$ = this.store.select(ProductSelectors.getCurrentProductSelector);
    this.displayCode$ = this.store.select(ProductSelectors.getShownProductCodeSelector);
  }

  checkChanged(): void {
    this.store.dispatch(ProductActions.toggleProductCode());
  }

  newProduct(): void {
    this.store.dispatch(ProductActions.initializeCurrentProductId());
  }

  productSelected(product: Product): void {
    this.store.dispatch(ProductActions.setCurrentProductId({ currentProductId: product.id }));
  }

  clearProduct(): void {
    this.store.dispatch(ProductActions.clearCurrentProductId());
  }

  createProduct(product: Product): void  {
    this.store.dispatch(ProductActions.createProduct({ product }));
  }

  updateProduct(product: Product): void  {
    this.store.dispatch(ProductActions.updateProduct({ product }));
  }

  deleteProduct(productId: number) {
    this.store.dispatch(ProductActions.deleteProduct({ productId }));
  }
}
