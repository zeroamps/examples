import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  constructor(public modal: NgbActiveModal) {}
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  constructor(private modalService: NgbModal) {}
  open() {
    const dialog = this.modalService.open(DialogComponent);
    dialog.dismissed.subscribe((data) => console.log(data));
    dialog.closed.subscribe((data) => console.log(data));
  }
}
