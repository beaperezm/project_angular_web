import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

//COREMODULE.ts es la raíz de toda nuestra aplicación

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
      //quiero proveer como interceptor HTTP mi web la clase AuthInterceptor
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, //es el nombre de la class del auth.interceptor.ts
      multi: true //sirve si quieres tener más de un interceptor aplicando en la web
    }
  ]
})
export class CoreModule { }
