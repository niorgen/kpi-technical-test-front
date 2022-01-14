import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditinvestmentComponent } from './editinvestment/editinvestment.component';
import { InvestmentlistcomponentComponent } from './investmentlistcomponent/investmentlistcomponent.component';

const routes: Routes = [
  { path: '', component: InvestmentlistcomponentComponent },
  { path: 'edit/:id', component: EditinvestmentComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
