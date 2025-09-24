import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizComponents } from './quiz-components';

describe('QuizComponents', () => {
  let component: QuizComponents;
  let fixture: ComponentFixture<QuizComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
