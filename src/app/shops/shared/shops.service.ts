import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shops } from './shops.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShopsService {
    
    constructor(private http: HttpClient) {}

      public getShopById(shopId: string): Observable<any> {
        return this.http.get('/api/v1/shops/' + shopId);           
      }

      public getShops(): Observable<any> {
        return this.http.get('/api/v1/shops');
      }
}