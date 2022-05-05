import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Components/navbar/navbar.component';
import { IntroComponent } from './Components/Components/intro/intro.component';
import { CoursesComponent } from './Components/Components/courses/courses.component';
import { FooterComponent } from './Components/Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    CoursesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
