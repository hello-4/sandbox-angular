import { Component, OnInit } from '@angular/core';

import { Hero } from '../../../interfaces/hero';
import { HeroService } from '../../../services/hero.service';
import { MessageService } from '../../../services/message.service';
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
  }
  goBack(): void {
    this.location.back();
  }
}
