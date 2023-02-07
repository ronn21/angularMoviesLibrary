import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie'
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

newMovies: Movie[] = []; // initialize the array after declare 



constructor(private ms: MoviesService) {

 }


ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.newMovies = this.ms.allMovies();
  console.table(this.newMovies);
}





}
