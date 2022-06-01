import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Interceptor1 } from './interceptor1.interceptor';
import { Interceptor2 } from './interceptor2.interceptor';
import { Interceptor3 } from './interceptor3.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgbModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor1, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor2, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor3, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
