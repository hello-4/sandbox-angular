import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './tutorial/hero/detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CommonModule } from '@angular/common';
import { TutorialComponent } from './tutorial/tutorial.component';
import { DashboardComponent } from './tutorial/dashboard/dashboard.component';
const routes: Routes = [
  {
    path: 'sandbox/tutorial/heros',
    component: HeroesComponent
  },
  {
    path: 'sandbox/tutorial/hero/:id',
    component: HeroDetailComponent
  },
  {
    path: 'sandbox/tutorial',
    component: TutorialComponent
  },
  {
    path: 'sandbox/tutorial/dashboard',
    pathMatch: 'full',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
