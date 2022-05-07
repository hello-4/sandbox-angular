import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../interfaces/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice_33311' },
      { id: 12, name: 'Narco_22' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
    ];

    const users = [
      { id: 11, name: '2_Dr Nice_22211' },
      { id: 12, name: '2_Narco_22' },
      { id: 13, name: '2_Bombasto' },
      { id: 14, name: '2_Celeritas' },
      { id: 15, name: '2_Magneta' },
      { id: 16, name: '2_RubberMan' },
      { id: 17, name: '2_Dynama' },
      { id: 18, name: '2_Dr IQ' },
      { id: 19, name: '2_Magma' },
      { id: 20, name: '2_Tornado' },
    ];
    return { heroes, users };
  }

  // 히어로 객체가 항상 id 프로퍼티를 갖도록 getId 메소드를 오버라이드 합니다.
  // 히어로 목록이 비어있다면 이 메소드는 초기값(11)을 반환합니다.
  // 히어로 목록이 비어있지 않으면 히어로 id의 최대값에 1을 더해서 반환합니다.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }

  constructor() {}
}
