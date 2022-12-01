import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChuckComponent } from './components/chuck/chuck.component';
import { DevComponent } from './components/dev/dev.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {path: 'chuck', component: ChuckComponent},
  {path: 'form', component: FormComponent},
  {path: 'dev', component: DevComponent},
  {path: '', component: DevComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
