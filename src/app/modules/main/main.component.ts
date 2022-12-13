import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesComponentService, MoviesResults, Results } from 'src/app/services/movies-component.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private readonly moviesService: MoviesComponentService,
    private router: Router) { }

   movies = new MoviesResults;
   public page!: number;
   search: string = '';
   movieSearched = new Results;

    ngOnInit(): void { 
      this.moviesService.getMovies().subscribe( res =>
        this.movies = res
      );
      
    }

    goToDetailMovie(movieId: number) {
      console.log("kkdkwkkdw");
      this.router.navigate(['app-movie-detail'], {queryParams: {movieId: movieId ,  skipLocationChange: true}});
    }

    searchMovie(searchMovie: string) {
      console.log(searchMovie);
      this.movieSearched = this.movies.results.filter(x => x.title == searchMovie)[0];
      this.movies.results = [this.movieSearched]
      console.log(this.movieSearched);
      console.log(this.movies.results);  
    }

 

}

