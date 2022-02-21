import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { MainComponent } from './main/main.component';
import { MyRutesComponent } from './my-rutes/my-rutes.component';
import { RuteDetailComponent } from './rute-detail/rute-detail.component';
import { RutesComponent } from './rutes/rutes.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'rutes',
    component: RutesComponent,
  },
  {
    path: 'myrutes',
    component: MyRutesComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'rute-detail',
    component: RuteDetailComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/main',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectionRoutingModule {}
