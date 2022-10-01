import { ComponentFactoryResolver, NgModule, ViewContainerRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardShareReviewComponent } from 'src/app/components/card-share-review/card-share-review.component';
import { ShareReviewComponent } from './share-review.component';
export * from './../../components/card-share-review/card-share-review.component';


const routes: Routes = [
  {
    path: '',
    component: ShareReviewComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CardShareReviewComponent]
})


export class ShareReviewRoutingModule {
 }
