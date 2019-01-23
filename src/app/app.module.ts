import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { ShopsComponent } from './shops/shops.component';
import { ShopsModule } from './shops/shops.module';


// create routes
const routes: Routes = [
  { path: '', redirectTo: 'shops', pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ShopsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
