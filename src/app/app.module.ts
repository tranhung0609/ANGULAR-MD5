import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PetComponent } from './pet/pet.component';
import { ShowProductListComponent } from './show-product-list/show-product-list.component';
import { CalculatorAppComponent } from './calculator-app/calculator-app.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { HackkerNewComponent } from './hackker-new/hackker-new.component';
import { LikeComponent } from './like/like.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CountdountComponent } from './countdount/countdount.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { FormLoginComponent } from './form-login/form-login.component';


@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    ShowProductListComponent,
    CalculatorAppComponent,
    ColorPickerComponent,
    HackkerNewComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent,
    NameCardComponent,
    ProgressBarComponent,
    CountdountComponent,
    TimelinesComponent,
    FormLoginComponent
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
