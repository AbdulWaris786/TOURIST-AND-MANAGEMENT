import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComnponent } from './Home/Components/MainHomePage/mainPage.component';
import { DestinationMainPage } from './Destination/Components/mainPage/mainPage.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
