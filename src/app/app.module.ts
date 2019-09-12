import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobilePartsComponent } from './mobile-parts/mobile-parts.component';
import { NavComponent } from './nav/nav.component';
import { BannerOneComponent } from './banner-one/banner-one.component';
import { BannerTwoComponent } from './banner-two/banner-two.component';
import { BannerThreeComponent } from './banner-three/banner-three.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ClothingComponent } from './clothing/clothing.component';
import { EducationComponent } from './education/education.component';
import { UtensilsComponent } from './utensils/utensils.component';

@NgModule({
  declarations: [
    AppComponent,
    MobilePartsComponent,
    NavComponent,
    BannerOneComponent,
    BannerTwoComponent,
    BannerThreeComponent,
    ProductsComponent,
    FooterComponent,
    ContactUsComponent,
    ClothingComponent,
    EducationComponent,
    UtensilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
