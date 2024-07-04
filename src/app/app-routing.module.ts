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
    path: '',
    loadChildren: async () => (await import('./auth/auth.module')).AuthModule
  },
  {
    path:'Destination',
    component:DestinationMainPage
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
