import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent  {
  @Input() image : string  = '';
  @Input() name : string  = '';
  @Input() description : string  = '';
}
