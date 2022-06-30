import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirestoreComponent } from './firestore.component';

const routes: Routes = [{ path: 'firestore', component: FirestoreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirestoreRoutingModule {}
