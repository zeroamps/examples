import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: Document, private modal: NgbModal) {}

  ltrrtl() {
    const html = this.document.querySelector('html') as HTMLHtmlElement;
    html.className = html.dir === 'rtl' ? 'ltr' : 'rtl';
    html.dir = html.dir === 'rtl' ? 'ltr' : 'rtl';
  }

  open(content: TemplateRef<ElementRef>) {
    console.log(content);
    this.modal.open(content).result.then(
      (result) => {},
      (reason) => {}
    );
  }
}
