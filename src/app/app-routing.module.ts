import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParamsGetterComponent } from './components/params-getter/params-getter.component';

const routes: Routes = [
  {path:'', component:ParamsGetterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
