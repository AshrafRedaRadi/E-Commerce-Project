import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopCategoryComponent } from './pages/shop-category/shop-category.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { LoginLogisterComponent } from './pages/login-logister/login-logister.component';
import { LogisterComponent } from './pages/logister/logister.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { OurBlogComponent } from './pages/our-blog/our-blog.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"our-blog", component: OurBlogComponent},
  {path:"blog-details", component: BlogDetailsComponent},
  {path:"shop-category", component: ShopCategoryComponent},
  {path:"shopping-cart", component: ShoppingCartComponent},
  {path:"logister", component: LogisterComponent},
  {path:"contact-us", component: ContactUsComponent},
  {path:"login-logister", component: LoginLogisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
