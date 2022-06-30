import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Student {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.component.html'
})
export class FirestoreComponent {
  students: Observable<Student[]>;
  constructor(private firestore: AngularFirestore) {
    this.students = this.firestore.collection<Student>('students').valueChanges();
  }
}
