import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQbanks } from './view-qbanks';

describe('ViewQbanks', () => {
  let component: ViewQbanks;
  let fixture: ComponentFixture<ViewQbanks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewQbanks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewQbanks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
