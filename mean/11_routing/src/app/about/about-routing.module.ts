import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';

import { AboutComponent } from './about.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent, children: [{ path: 'me', component: AboutMeComponent }] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
