import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './tutorial/hero/list/heroes.component';
import { HeroDetailComponent } from './tutorial/hero/detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { DashboardComponent } from './tutorial/hero/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { SearchComponent } from './tutorial/hero/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    TutorialComponent,
    DashboardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
