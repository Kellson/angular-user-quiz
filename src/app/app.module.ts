import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalsModule } from './modals/modals.module';
import { HomeComponent } from './pages/home/home.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { ModalsService } from './services/modals-service/modals.service';
import { SelectedQuizComponent } from './pages/quiz/components/selected-quiz/selected-quiz.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, QuizComponent, RankingComponent, SelectedQuizComponent],
  imports: [
    ModalsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgChartsModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserAnimationsModule,
  ],
  providers: [ModalsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
