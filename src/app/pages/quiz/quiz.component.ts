import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { IQuizConfig, fakeData } from 'src/app/common/utils/fake-data';
import { ModalsService } from '../../services/modals-service/modals.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  quizInfo = fakeData.quiz;
  faArrowRight = faArrowRight;
  selectedQuiz?: IQuizConfig;
  formGroup: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private modalsService: ModalsService,
    private viewportScroller: ViewportScroller
  ) {}

  handleSetQuiz(quizSubject: IQuizConfig) {
    this.selectedQuiz = quizSubject;
    const newFormGroupBody = this.selectedQuiz.questions.reduce(
      (a, _, i) => ({
        ...a,
        [`question${i + 1}`]: [''],
      }),
      {}
    );
    this.formGroup = this.formBuilder.group(newFormGroupBody);
    this.viewportScroller.scrollToAnchor('quizPageContainerId');
  }

  showQuizResult() {
    let ok = 0;
    let wrong = 0;
    let notAnswered = 0;

    Object.values(this.formGroup.getRawValue()).forEach((x: any) => {
      if (!x) return notAnswered++;
      if (this.selectedQuiz?.questions.find((y) => y.rightOption === x)) ok++;
      else wrong++;
      return;
    });
    this.modalsService.changeModal({
      id: 'quizResultModal',
      data: { ok, wrong, notAnswered },
    });
  }
}
