import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ltrrtl() {
    const html = this.document.querySelector('html') as HTMLHtmlElement;
    html.className = html.dir === 'rtl' ? 'ltr' : 'rtl';
    html.dir = html.dir === 'rtl' ? 'ltr' : 'rtl';
  }
}
