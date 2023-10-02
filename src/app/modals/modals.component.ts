import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalsService } from './../services/modals-service/modals.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss'],
})
export class ModalsComponent implements OnInit {
  @ViewChild('foreGround') foreGround?: ElementRef;
  modalService: ModalsService;
  constructor(modalService: ModalsService) {
    this.modalService = modalService;
  }

  ngOnInit(): void {}

  handleCloseAll() {
    const child =
      this.foreGround?.nativeElement.children &&
      this.foreGround?.nativeElement.children.length > 0 &&
      this.foreGround?.nativeElement.children[0];
    if (
      child &&
      child.classList &&
      child.classList.contains('backgroundClose')
    ) {
      this.modalService.changeModal(undefined);
    }
  }
}
