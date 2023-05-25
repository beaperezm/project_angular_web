import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

//COREMODULE.ts is the root of our entire application

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent
  ],
  providers: [
    {
      //I want to provide as HTTP interceptor my web site with the AuthInterceptor class
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, //is the name of the class of auth.interceptor.ts
      multi: true //is useful if you want to have more than one interceptor applying on the web
    }
  ]
})
export class CoreModule { }
