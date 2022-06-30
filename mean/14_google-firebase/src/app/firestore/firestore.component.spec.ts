import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import firebase from 'firebase/compat/app';

import { environment } from '../../environments/environment';
import { SharedModule } from '../shared/shared.module';
import { FirestoreComponent } from './firestore.component';

firebase.initializeApp(environment.firebase);

describe('FirestoreComponent', () => {
  let component: FirestoreComponent;
  let fixture: ComponentFixture<FirestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirestoreComponent],
      imports: [SharedModule],
      providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
