import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalsModule } from './modals/modals.module';
import { HomeComponent } from './pages/home/home.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { ModalsService } from './services/modals-service/modals.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, QuizComponent, RankingComponent],
  imports: [
    ModalsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [ModalsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
