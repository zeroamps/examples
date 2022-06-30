import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.component.html'
})
export class FirestoreComponent {
  constructor(private firestore: AngularFirestore) {}
}
