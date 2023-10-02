import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { fakeData } from 'src/app/common/utils/fake-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  fakeData = fakeData;
  doughnutChartType: ChartType = 'doughnut';
  mathDoughnutChartData: ChartData<'doughnut'> = {
    datasets: [
      {
        backgroundColor: ['#61ff41', '#ff3838', '#fff638'],
        data: [
          fakeData.subjects.math.ok,
          fakeData.subjects.math.wrong,
          fakeData.subjects.math.notAnswered,
        ],
      },
    ],
  };

  portugueseDoughnutChartData: ChartData<'doughnut'> = {
    datasets: [
      {
        backgroundColor: ['#61ff41', '#ff3838', '#fff638'],
        data: [
          fakeData.subjects.portuguese.ok,
          fakeData.subjects.portuguese.wrong,
          fakeData.subjects.portuguese.notAnswered,
        ],
      },
    ],
  };

  sciencesDoughnutChartData: ChartData<'doughnut'> = {
    datasets: [
      {
        backgroundColor: ['#61ff41', '#ff3838', '#fff638'],
        data: [
          fakeData.subjects.sciences.ok,
          fakeData.subjects.sciences.wrong,
          fakeData.subjects.sciences.notAnswered,
        ],
      },
    ],
  };
}
