import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ShopsComponent } from './shops.component';
import { ShopsListComponent } from './shops-list/shops-list.component';
import { ShopsListItemComponent } from './shops-list-item/shops-list-item.component';
import { ShopsService } from './shared/shops.service';
import { ShopsDetailComponent } from './shops-detail/shops-detail.component';

// create routes
const routes: Routes = [
    { path: 'shops', 
      component: ShopsComponent,
      children: [
          {path: '', component: ShopsListComponent},
          {path: ':shopId', component: ShopsDetailComponent}
      ]}
  ]

@NgModule({
    declarations: [
        ShopsComponent,
        ShopsListComponent,
        ShopsListItemComponent,
        ShopsDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)],
    providers: [ShopsService]
})
export class ShopsModule { }