import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareReviewComponent } from './share-review.component';

describe('ShareReviewComponent', () => {
  let component: ShareReviewComponent;
  let fixture: ComponentFixture<ShareReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
