import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComnponent } from './Home/Components/MainHomePage/mainPage.component';
import { DestinationMainPage } from './Destination/Components/mainPage/mainPage.component';
import { MainComponent } from './auth/mainPage/main.component';
import { authRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [
  {
    path:'',
    component:MainPageComnponent
  },
  {
    path:'Destination',
    component:DestinationMainPage
  },
  {
    path: 'user',
    loadChildren: async () => (await import('./auth/auth.module')).AuthModule
  }
  // {
  //   path:'login',
  //   component:MainComponent
  // },
  // {
  //   path:'signup',
  //   component:MainComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
