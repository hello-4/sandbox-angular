import { Component, OnInit } from '@angular/core';

import { HEROES } from './../../heros';
import { Hero } from './../../hero';
import { HeroService } from './../../hero.service';
import { MessageService } from './../../message.service';
import { ThisReceiver } from '@angular/compiler';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private HeroService: HeroService,
    public messageService: MessageService,
    private location: Location) { }
  heroes: Hero[] = [];
  ngOnInit(): void {
    this.HeroService.getHeroes().subscribe(aaa => this.heroes = aaa.slice(1, 5));
    this.messageService.add('aaaa');
  }
  goBack(): void {
    this.location.back();
  }
}
