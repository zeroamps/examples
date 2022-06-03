import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonePrefixesDropdownComponent } from './phone-prefixes-dropdown/phone-prefixes-dropdown.component';

@NgModule({
  declarations: [AppComponent, PhonePrefixesDropdownComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
