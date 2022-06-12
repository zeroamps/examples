import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesModule } from './directives/directives-forms.module';
import { TemplateDrivenFormsModule } from './template-driven-forms/template-driven-forms.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, DirectivesModule, TemplateDrivenFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
