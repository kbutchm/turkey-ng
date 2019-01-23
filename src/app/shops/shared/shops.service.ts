import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shops } from './shops.model';

@Injectable()
export class ShopsService {
    
    private shops: Shops[] = [{
        id: "1",
        title: "Abbey St",
        city: "Ennis",
        street: "Abbey St",
        location: "Ennis",
        established: "1960",
        image: "http://via.placeholder.com/350x250",
        description: "Shop #1",
        createdAt: "24/12/2017"
      },
      {
        id: "2",
        title: "Roslevan",
        city: "Barefield",
        street: "Tulla Road",
        location: "Roslevan",
        established: "2004",
        image: "http://via.placeholder.com/350x250",
        description: "Shop #2",
        createdAt: "24/12/2017"
      }];

      public getShopById(shopId: string): Observable<Shops> {

        return new Observable<Shops>((observer) => {

            setTimeout(() => {
                const foundShop = this.shops.find((shop) => {
                    return shop.id == shopId;
                });
                observer.next(foundShop);
            }, 500);
        });
      }
      public getShops(): Observable<Shops[]> {
          return new Observable<Shops[]>((observer) => {
            
            setTimeout(() => {
                observer.next(this.shops);
            }, 1000);
          });
      }
}