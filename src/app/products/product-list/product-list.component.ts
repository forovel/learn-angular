import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from '../product';
import * as ProductActions from '../state/product.actions';
import * as ProductSelectors from '../state/product.selectors';
import { State } from '../state/product.state';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';

  products$: Observable<Product[]>;
  selectedProduct$: Observable<Product>;
  displayCode$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {

    this.store.dispatch(ProductActions.loadProducts());
    this.products$ = this.store.select(ProductSelectors.getProductsSelector);
    this.errorMessage$ = this.store.select(ProductSelectors.getError);
    this.selectedProduct$ = this.store.select(ProductSelectors.getCurrentProductSelector);
    this.displayCode$ = this.store.select(ProductSelectors.getShownProductCodeSelector);
  }

  ngOnDestroy(): void {

  }

  checkChanged(): void {
    this.store.dispatch(ProductActions.toggleProductCode());
  }

  newProduct(): void {
    this.store.dispatch(ProductActions.initCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(ProductActions.setCurrentProduct({ product }));
  }

}
