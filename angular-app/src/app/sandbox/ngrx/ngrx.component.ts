import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { User } from '../../interfaces/user';
import { SandboxService } from '../../services/sandbox.service';
import * as Selector from '../../sandbox/sandbox.selector';
import { State } from '../../sandbox/sandbox.reducer';
import * as SandboxActions from '../../sandbox/sandbox.actions';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.css'],
})
export class NgrxComponent implements OnInit {
  users$?: Observable<User[]>;
  usersStore$?: Observable<User[]>;

  constructor(
    private sandboxService: SandboxService,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.sandboxService.getUsers().subscribe((users) => {
      // from Observable
      this.users$ = of(users);

      // save to store
      this.store.dispatch(SandboxActions.update1({ hoge: 999, pUsers: users }));
    });

    this.usersStore$ = this.store.select(Selector.selectUsers);
  }

  onClick() {
    const updateUsers = [
      { id: 1, name: 'yeon1' },
      { id: 2, name: 'yeon2' },
      { id: 3, name: 'yeon3' },
    ];

    this.store.dispatch(SandboxActions.update1({ pUsers: updateUsers }));
    this.usersStore$?.subscribe((aaa) => console.log('[debug_94783]', aaa));
  }
}
