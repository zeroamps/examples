import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirestoreComponent } from './firestore.component';
import { FirestoreRoutingModule } from './firestore-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FirestoreComponent],
  imports: [CommonModule, FirestoreRoutingModule, SharedModule]
})
export class FirestoreModule {}
