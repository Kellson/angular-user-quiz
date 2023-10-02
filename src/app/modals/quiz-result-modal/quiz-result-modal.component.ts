import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { ModalsService } from './../../services/modals-service/modals.service';

@Component({
  selector: 'app-quiz-result-modal',
  templateUrl: './quiz-result-modal.component.html',
  styleUrls: ['./quiz-result-modal.component.scss'],
})
export class QuizResultModalComponent implements OnInit {
  modaisService: ModalsService;
  doughnutChartData?: ChartData<'doughnut'>;
  doughnutChartType: ChartType = 'doughnut';

  constructor(modaisService: ModalsService) {
    this.modaisService = modaisService;
    this.doughnutChartData = {
      datasets: [
        {
          backgroundColor: ['#61ff41', '#ff3838', '#fff638'],
          data: [
            this.modaisService.modalInformations?.data.ok,
            this.modaisService.modalInformations?.data.wrong,
            this.modaisService.modalInformations?.data.notAnswered,
          ],
        },
      ],
    };
  }

  ngOnInit(): void {}

  closeModal() {
    this.modaisService.changeModal(undefined);
  }
}
