import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ModalsComponent } from './modals.component';
import { QuizResultModalComponent } from './quiz-result-modal/quiz-result-modal.component';

@NgModule({
  declarations: [ModalsComponent, QuizResultModalComponent],
  imports: [CommonModule, NgChartsModule],
  exports: [ModalsComponent],
})
export class ModalsModule {}
