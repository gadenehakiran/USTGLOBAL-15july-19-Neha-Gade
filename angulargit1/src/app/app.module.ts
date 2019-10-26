import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import{FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample.componenet';
// import { HeaderComponent } from './header/header.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { DirectivesComponent } from './directives/directives.component';
import { IfswitchComponent } from './ifswitch/ifswitch.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { MyDirectiveDirective } from './my-directive.directive';
//import { ParentComponent } from './parent/parent.component';
// import { ChildComponent } from './child/child.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { CarDetailsComponent } from './assignment/car-details/car-details.component';
import { CarComponent } from './assignment/car/car.component';
import { ReceipesComponent } from './assignment/receipes/receipes.component';
import { ReceipeDetailsComponent } from './assignment/receipe-details/receipe-details.component';
import { NewsComponent } from './assignment/news/news.component';
import { NewsDetailsComponent } from './assignment/news-details/news-details.component';
import { MobilesComponent } from './assignment/mobiles/mobiles.component';
import { MobileDetailsComponent } from './assignment/mobile-details/mobile-details.component';
// import { HomeComponent } from './assignment/home/home.component';
// import { AboutComponent } from './assignment/about/about.component';
// import { Child1Component } from './assignment/child1/child1.component';
// import { Child2Component } from './assignment/child2/child2.component';
// import { Child3Component } from './assignment/child3/child3.component';
// import { LoginComponent } from './assignment/login/login.component';
// import { RegisterComponent } from './assignment/register/register.component';
// import { PageNotFoundComponent } from './assignment/page-not-found/page-not-found.component';
// import { DataBindingComponent } from './data-binding/data-binding.component';
import { HeaderComponent } from './assignment/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    // HeaderComponent,
  
    ClassBindingComponent,
  
    StyleBindingComponent,
  
    TwoWayComponent,
  
    DirectivesComponent,
  
    IfswitchComponent,
  
    AttributeDirectivesComponent,
  
    MyDirectiveDirective,
  
    // ParentComponent,
  
    // ChildComponent,
  
    BikesComponent,
  
    BikeDetailsComponent,
    CarComponent,
    CarDetailsComponent,
    ReceipesComponent,
    ReceipeDetailsComponent,
    NewsComponent,
    NewsDetailsComponent,
    MobilesComponent,
    MobileDetailsComponent,
    HeaderComponent,
// HomeComponent,
// RegisterComponent,
// LoginComponent,
// AboutComponent,
// PageNotFoundComponent,
// Child2Component,
// Child3Component

    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      
      { path:'cars', component: CarComponent},
      {path:'car-details', component: CarDetailsComponent},
      {path:'news', component: NewsComponent},
      {path:'news-details', component: NewsDetailsComponent},
    {path: 'receipes', component: ReceipesComponent},
    {path:'receipes-details', component: ReceipeDetailsComponent},
    {path:'mobiles',component: MobilesComponent},
    {path:'mobiles-details', component: MobileDetailsComponent}
     ])
     

  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }








