import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShareReviewComponent } from './card-share-review.component';

describe('CardShareReviewComponent', () => {
  let component: CardShareReviewComponent;
  let fixture: ComponentFixture<CardShareReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardShareReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardShareReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
