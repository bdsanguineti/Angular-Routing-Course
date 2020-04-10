import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})

export class ProductResolver implements Resolve<Product> {

  constructor( private productServe: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    const id = +route.paramMap.get('id');
    return this.productServe.getProduct(id);
  }
}
