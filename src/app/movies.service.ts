import { Injectable } from '@angular/core';
import { Movie } from './models/movie';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // access only through method
  private movies: Movie[] = [
  {_id: 0, _title: 'Diuna', _year: 2021, _desc: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future."},
  {_id: 1, _title: 'Eva', _year: 2011, _desc: "The year 2041 - Alex Garel a well-known programmer returns to his hometown to take care of a project abandoned years ago to create a robot-child personality. He meets his brother, David, and his wife, who turns out to be Alex's ex-girlfriend Lana. He also meets their daughter, Eva. The girl becomes an inspiration in his work. However, as his relationship with Eva grows closer, Alex begins to have doubts about whether he should complete his project. His feelings for Lana also come to life anew. But Lana hides a secret from him"  },
  {_id: 2, _title: 'The book of Kells' , _year: 2009, _desc: "A young boy in a remote medieval outpost under siege from barbarian raids is beckoned to adventure when a celebrated master illuminator arrives with an ancient book, brimming with secret wisdom and powers."},
  {_id: 3, _title: 'Mr.Nobody', _year: 2009, _desc: "A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision." },
  {_id: 4, _title: 'Prince of Persia', _year: 2010, _desc: "A young fugitive prince and princess must stop a villain who unknowingly threatens to destroy the world with a special dagger that enables the magic sand inside to reverse time." },
  {_id: 5, _title: 'Star Wars V', _year: 1980, _desc: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett." },
  ];
  

  allMovies(): Movie[] {
    return this.movies; // return movies
  }
  
  
  constructor() { }
}
