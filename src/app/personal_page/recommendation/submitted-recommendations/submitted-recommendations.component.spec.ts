import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedRecommendationsComponent } from './submitted-recommendations.component';

describe('SubmittedRecommendationsComponent', () => {
  let component: SubmittedRecommendationsComponent;
  let fixture: ComponentFixture<SubmittedRecommendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedRecommendationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
