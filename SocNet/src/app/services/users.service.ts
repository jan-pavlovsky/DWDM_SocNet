import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Observable<Array<any>>;

  constructor(public db: AngularFirestore) {
    this.users = db.collection('users').valueChanges();
  }

  public getAllUsers() {
  }

  public createUser(user: User) {
  }

  public getUserById(id: string) {
  }

  public updateUser(user: User) {
  }

  public deleteUserById(id: string) {
  }
}
