import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../interfaces/hero';
import { HeroService } from '../../../services/hero.service';
import { MessageService } from '../../../services/message.service';
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
  heroName: string = "";
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string) {
    name = name.trim();
    if (!name) { return; }

    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => this.heroes.push(hero));
  }

  delete(hero: Hero) {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.delHero(hero).subscribe();

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

