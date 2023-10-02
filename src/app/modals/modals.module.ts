import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalsComponent } from './modals.component';
import { QuizResultModalComponent } from './quiz-result-modal/quiz-result-modal.component';

@NgModule({
  declarations: [ModalsComponent, QuizResultModalComponent],
  imports: [CommonModule],
  exports: [ModalsComponent],
})
export class ModalsModule {}
