import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private productUrl = 'api/products.json';

    constructor(private http: HttpClient) {

    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productUrl).pipe(
                tap(data => console.log('All: ' + JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${error.error.message}`;
        } else {
            errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
        }

        console.error(errorMessage);

        return throwError(errorMessage);
    }
}
