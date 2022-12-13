import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent  {
  @Input() image : string  = '';
  @Input() title : string  = '';
  @Input() description : string  = '';
  @Output('goToDetail') goToDetail: EventEmitter<any> = new EventEmitter();

  

}
