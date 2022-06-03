import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonePrefixesDropdownComponent } from './phone-prefixes-dropdown/phone-prefixes-dropdown.component';

@NgModule({
  declarations: [AppComponent, PhonePrefixesDropdownComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, NgbModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
