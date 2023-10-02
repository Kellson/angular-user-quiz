import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  faHome,
  faQuestion,
  faRankingStar,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { RotasEnum } from './common/utils/rotas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  subscription: Subscription;
  title = 'angular-user-quiz';
  rotasEnum = RotasEnum;
  faHome = faHome;
  faRankingStar = faRankingStar;
  faQuestion = faQuestion;
  rotaAtual: string = RotasEnum.home;
  constructor(private router: Router) {
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.rotaAtual = event.urlAfterRedirects;
      }
    });
  }

  goTo(path: RotasEnum) {
    this.router.navigate([path]);
  }
  isActiveRoute() {
    return false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
