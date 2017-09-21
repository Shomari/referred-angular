import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindForRecommendationComponent } from './find-for-recommendation.component';

describe('FindForRecommendationComponent', () => {
  let component: FindForRecommendationComponent;
  let fixture: ComponentFixture<FindForRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindForRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindForRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
