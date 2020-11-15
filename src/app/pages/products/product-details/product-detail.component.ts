import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: [
    './product-detail.component.less'
  ]
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: Product | undefined;
  errorMessage = '';

  constructor(private activatedRoute: ActivatedRoute,
              private route: Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getProduct(id);
  }

  getProduct(id: number): void {
    this.productService.getProductById(id).subscribe({
      next: product => this.product = product,
      error: error => this.errorMessage = error
    });
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product Detail ' + message;
  }

  onBack(): void {
    this.route.navigate(['/products']);
  }

}
