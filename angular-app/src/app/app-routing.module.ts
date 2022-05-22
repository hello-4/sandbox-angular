import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './tutorial/hero/detail/hero-detail.component';
import { HeroesComponent } from './tutorial/hero/list/heroes.component';
import { CommonModule } from '@angular/common';
import { TutorialComponent } from './tutorial/tutorial.component';
import { DashboardComponent } from './tutorial/hero/dashboard/dashboard.component';
import { CounterComponent } from './counter/counter.component';
import { NgrxComponent } from './sandbox/ngrx/ngrx.component';
const routes: Routes = [
  {
    path: 'sandbox/tutorial/heros',
    component: HeroesComponent,
  },
  {
    path: 'sandbox/tutorial/hero/detail/:id',
    component: HeroDetailComponent,
  },
  {
    path: 'sandbox/tutorial',
    component: TutorialComponent,
  },
  {
    path: 'sandbox/tutorial/dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
  },
  {
    path: 'sandbox/counter',
    pathMatch: 'full',
    component: CounterComponent,
  },
  {
    path: 'sandbox/ngrx',
    component: NgrxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule],
})
export class AppRoutingModule {}
