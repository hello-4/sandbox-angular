import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SandboxService {
  private heroesUrl = 'api/heroes';
  constructor(private http: HttpClient) {}
  getUsers() {
    const data = this.http.get<User[]>('api/heroes').pipe(
      tap((_) => console.log('fetched users'))
      // catchError(this.handleError<Hero[]>('getHeroes', []))
    );
    console.log('data', data);
    return data;
  }
}
