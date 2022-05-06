import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loading: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  public oneOf() {
    const songs = [
      'https://www.youtube.com/watch?v=ORzWbJJrXCU',
      'https://youtu.be/LMaBedTkT0I?t=85',
      'https://www.youtube.com/watch?v=6knycDu1hVs',
      'https://www.youtube.com/watch?v=IRumZmKd4XY',
      'https://www.youtube.com/watch?v=MS9k8qX3HPA',
      'https://www.youtube.com/watch?v=h7apO7q16V0',
    ];
    const which = getRandomInt(songs.length);
    console.log(songs[which]);
    return songs[which];
    // window.location.href = songs[which];
    // this.router.navigateByUrl(songs[which]);

    // window.location.href = 'https://youtu.be/LMaBedTkT0I?t=85';
  }
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
