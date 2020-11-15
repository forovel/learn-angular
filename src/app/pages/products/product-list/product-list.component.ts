import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: [
        './product-list.component.less'
    ]
})
export class ProductListComponent implements OnInit, OnDestroy {
    title = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;

    errorMessage: any;

    private plistFilter: string;
    get listFilter(): string {
        return this.plistFilter;
    }
    set listFilter(value: string) {
        this.plistFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: Product[];
    products: Product[] = [];

    constructor(private productService: ProductService) {

    }

    onRatingClicked(message: string): void {
        this.title = 'Product List: ' + message;
    }

    performFilter(filterBy: string): Product[] {
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product: Product) => product.productName.toLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err
        });
    }

    ngOnDestroy(): void {
        // throw new Error('Method not implemented.');
    }
}
