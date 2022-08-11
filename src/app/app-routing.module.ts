import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DomainComponent } from './components/domain/domain.component';
import { HomeComponent } from './components/home/home.component';
import { ProgrammeComponent } from './components/programme/programme.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'domaine', component: DomainComponent},
  {path:'programme', component: ProgrammeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
