import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { ApplicationComponent } from './views/applicationpage/application/application.component';
import { MoneyexchangepageComponent } from './views/applicationpage/moneyexchangepage/moneyexchangepage.component';
MoneyexchangepageComponent
const routes: Routes = [
  { path: '', redirectTo: 'trang-chu', pathMatch: 'full' },
  { path: 'trang-chu', component: HomepageComponent },
  {
    path: 'tien-ich',
    children: [
      {
        path: '',
        component: ApplicationComponent,
      },
      {
        path: 'chuyen-doi-tien-te',
        component: MoneyexchangepageComponent,
      },
    ],
  },
  { path: 'cho-khach-lien-tinh', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
