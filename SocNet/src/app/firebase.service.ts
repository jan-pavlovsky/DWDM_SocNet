import { Injectable } from '@angular/core';
import { FirebaseDatabase } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  items: Observable<any[]>;

  constructor(public db: AngularFirestore) {
    this.items = db.collection('posts').valueChanges();
  }

  public posts() {
    return this.db.collection('/posts').snapshotChanges();
  }

  addDocument() {
    console.log('here');
    this.db.collection("posts").add({
      name: "firstOne",
      content: "Hey bro"
    }).then(function () {
      console.log("Document successfully written!");
    }).catch(function (error) {
      console.error("Error writing document: ", error);
    });
  }
}
