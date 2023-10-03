import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedQuizComponent } from './selected-quiz.component';

describe('SelectedQuizComponent', () => {
  let component: SelectedQuizComponent;
  let fixture: ComponentFixture<SelectedQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedQuizComponent]
    });
    fixture = TestBed.createComponent(SelectedQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
