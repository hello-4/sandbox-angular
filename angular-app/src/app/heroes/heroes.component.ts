import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private location: Location,
    private messageService: MessageService) { }

  selectedHero?: Hero;
  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  goBack(): void {
    this.location.back();
  }
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  //heroes = HEROES;
  // onSelect(hero: Hero): void {
  //   console.log(hero);
  //   this.selectedHero = hero;

  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  // }
}

