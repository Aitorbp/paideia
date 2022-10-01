import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardShareReviewComponent, ShareReviewRoutingModule } from './share-review-routing.module';
import { ShareReviewComponent } from './share-review.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ShareReviewComponent,
    CardShareReviewComponent

  ],
  imports: [
    CommonModule,
    ShareReviewRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ShareReviewComponent,
    CardShareReviewComponent 
  ]
})
export class ShareReviewModule { }
