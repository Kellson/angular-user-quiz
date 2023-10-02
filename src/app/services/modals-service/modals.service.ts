import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

interface ModalInfo {
  id: string;
  data?: any;
}

@Injectable({
  providedIn: 'root',
})
export class ModalsService {
  modalInformations?: ModalInfo;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  changeModal(modalInfo?: ModalInfo) {
    if (modalInfo) {
      this.document.body.style.overflow = 'hidden';
    } else {
      this.document.body.style.overflow = 'initial';
    }
    this.modalInformations = modalInfo;
  }
}
