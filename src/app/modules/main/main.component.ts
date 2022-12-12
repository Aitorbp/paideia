import { Component, OnInit } from '@angular/core';
import { MoviesComponentService, MoviesResults } from 'src/app/services/movies-component.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private readonly moviesService: MoviesComponentService) { }

   movies = new MoviesResults;
   public page!: number;
  ngOnInit(): void { 
    this.moviesService.getMovies().subscribe( res =>
      this.movies = res
    );
    
  }

 

}

