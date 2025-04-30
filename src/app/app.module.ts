import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopCategoryComponent } from './pages/shop-category/shop-category.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { LoginLogisterComponent } from './pages/login-logister/login-logister.component';
import { LogisterComponent } from './pages/logister/logister.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { OurBlogComponent } from './pages/our-blog/our-blog.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { ShopSingleComponent } from './pages/shop-single/shop-single.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopCategoryComponent,
    ShoppingCartComponent,
    LoginLogisterComponent,
    LogisterComponent,
    ContactUsComponent,
    OurBlogComponent,
    BlogDetailsComponent,
    ShopSingleComponent,
    NavComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
