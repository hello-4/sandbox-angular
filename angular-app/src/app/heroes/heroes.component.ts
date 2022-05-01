import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../heros';
HEROES
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  selectedHero?: Hero;

  ngOnInit(): void {
  }
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  heroes = HEROES;
  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }
}

