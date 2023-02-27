import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcelComponent } from './parcel/components/parcel.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'parcels'},
  {path: 'parcels', component: ParcelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
