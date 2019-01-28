import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Observable<Array<any>>;

  constructor(private db: AngularFirestore) {
    this.users = db.collection('users').snapshotChanges();
  }

  public getAllUsers() {
    return this.db.collection('users').valueChanges();
  }

  public createUser(user: User) {
    this.db.collection("users").add({
      alias: user.alias,
      firstName: user.firstName,
      lastName: user.lastName
    }).then(function () {
      console.log("Document successfully written!");
    }).catch(function (error) {
      console.error("Error writing document: ", error);
    });
  }

  public createUserManualId(user: User) {
    this.db.collection("users").doc(user.id).set({
      alias: user.alias,
      firstName: user.firstName,
      lastName: user.lastName
    }).then(function () {
      console.log("Document successfully written!");
    }).catch(function (error) {
      console.error("Error writing document: ", error);
    });
  }

  public getUserById(id: string) {
    return this.db.collection('users').doc(id).get();
  }

  public updateUser(user: User) {
    let id = user.id;
    return this.db.collection('users').doc(id).set(user);
  }

  public deleteUserById(id: string) {
    return this.db.collection('users').doc(id).delete();
  }
}
