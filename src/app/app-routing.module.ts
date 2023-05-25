import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ExitGuard } from './core/guards/exit.guard';
import { RequestDinoResolver } from './core/resolvers/request-dino.resolver';


//Added web routes

const routes: Routes = [

  //empty path redirects to home
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
   loadChildren: () => import ('./pages/home/home.module').then(m => m.HomeModule) 
  },
  {
    path: 'dinosaurs-list',
   loadChildren: () => import ('./pages/dino-list/dino-list.module').then(m => m.DinoListModule) 
  },
  {
    path: 'detail/:id',
   loadChildren: () => import ('./pages/dino-detail/dino-detail.module').then(m => m.DinoDetailModule),

   //access is only possible if you are logged in
   canActivate: [AuthGuard],

   //until the detail is loaded, it will not lead to the detail path
   resolve: [RequestDinoResolver] 
  },
  {
    path: 'create-dino',
   loadChildren: () => import ('./pages/create-dino/create-dino.module').then(m => m.CreateDinoModule),
   //access is only possible if you are logged in
   canActivate: [AuthGuard]
  },
  {
    path: 'your-dinos',
   loadChildren: () => import ('./pages/your-dinos/your-dinos.module').then(m => m.YourDinosModule),
   canActivate: [AuthGuard]
  },
  {
    path: 'yourDinosaurs/:id',
   loadChildren: () => import ('./pages/yourDino-detail/your-dino-detail.module').then(m => m.YourDinoDetailModule),
   //access is only possible if you are logged in
   canActivate: [AuthGuard]
  },
  {
    path: 'register',
   loadChildren: () => import ('./pages/sign-up/sign-up.module').then(m => m.SignUpModule)
  },
  {
    path: 'login',
   loadChildren: () => import ('./pages/login/login.module').then(m => m.LoginModule) 
  },
  {
    path: 'account',
   loadChildren: () => import ('./pages/account/account.module').then(m => m.AccountModule),
   //access is only possible if you are logged in
   canActivate: [AuthGuard]
  },

  //path que no existe - se carga la url not found
  {
    path: '**',
   loadChildren: () => import ('./pages/url-not-found/url-not-found.module').then(m => m.UrlNotFoundModule) 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
