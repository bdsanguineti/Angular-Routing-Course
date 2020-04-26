import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, UrlHandlingStrategy } from '@angular/router';

import { Observable, of } from 'rxjs';
import { ProductResolved } from './product'; // Error Interface. See Product.ts
import { ProductService } from './product.service';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root' // We register it with the root application injector using providedIn-
})


export class ProductResolver implements Resolve<ProductResolved> { // Set the resolve generic parameter. This resolve return a single product or Error.

  constructor( private productServe: ProductService) { } // Inject a instance of product service. Get Product via Http.

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ProductResolved> { // Return a observable. Product Resolver instead of Product allows to import Error and Product.
    const id = route.paramMap.get('id'); // retrieve the route parameter from the route.

    // Adding Error Handling for invalid id.
    if (isNaN(+id)) {
      const message = `Product id was not a number: ${id}`;
      console.error(message);
      return of({product: null, error: message});
    }

    return this.productServe.getProduct(+id) // Get product via HTTP passing Product ID
    .pipe(
      map(product => ({product: product})),
      catchError(error => { // catch any error from product service
        const message = `Retrieval Error: ${error}`;
        console.error(message);
        return of({product: null, error: message}); // return a null object and the error.
      })
    );
  }
}
