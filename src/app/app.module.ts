import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PetComponent } from './pet/pet.component';
import { ShowProductListComponent } from './show-product-list/show-product-list.component';
import { CalculatorAppComponent } from './calculator-app/calculator-app.component';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    ShowProductListComponent,
    CalculatorAppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
