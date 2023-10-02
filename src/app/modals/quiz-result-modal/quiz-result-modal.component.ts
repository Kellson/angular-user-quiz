import { Component, OnInit } from '@angular/core';
import { ModalsService } from './../../services/modals-service/modals.service';

@Component({
  selector: 'app-quiz-result-modal',
  templateUrl: './quiz-result-modal.component.html',
  styleUrls: ['./quiz-result-modal.component.scss'],
})
export class QuizResultModalComponent implements OnInit {
  modaisService: ModalsService;

  constructor(modaisService: ModalsService) {
    this.modaisService = modaisService;
  }

  ngOnInit(): void {}

  closeModal() {
    this.modaisService.changeModal(undefined);
  }
}
