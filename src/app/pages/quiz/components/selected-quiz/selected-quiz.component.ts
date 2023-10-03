import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-selected-quiz',
  templateUrl: './selected-quiz.component.html',
  styleUrls: ['./selected-quiz.component.scss'],
})
export class SelectedQuizComponent implements AfterViewInit {
  constructor(private viewportScroller: ViewportScroller) {}

  ngAfterViewInit(): void {
    this.viewportScroller.scrollToAnchor('quizPageContainerId');
  }
}
