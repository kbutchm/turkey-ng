import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'ngx-pipes';

import { ShopsComponent } from './shops.component';
import { ShopsListComponent } from './shops-list/shops-list.component';
import { ShopsListItemComponent } from './shops-list-item/shops-list-item.component';
import { ShopsService } from './shared/shops.service';
import { ShopsDetailComponent } from './shops-detail/shops-detail.component';

import { UppercasePipe } from '../common/pipes/uppercase.pipe';

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
        ShopsDetailComponent,
        UppercasePipe
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        NgPipesModule
    ],
    providers: [ShopsService]
})
export class ShopsModule { }