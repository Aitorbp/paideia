import { ComponentFactoryResolver, NgModule, ViewContainerRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardMovieComponent } from 'src/app/components/card-share-review/card-movie.component';
import { MainComponent } from './main.component';
export * from '../../components/card-share-review/card-movie.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CardMovieComponent]
})


export class MainRoutingModule {
 }
