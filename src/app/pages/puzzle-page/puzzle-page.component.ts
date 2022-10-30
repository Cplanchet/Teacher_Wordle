import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'tw-puzzle-page',
  templateUrl: './puzzle-page.component.html',
  styleUrls: ['./puzzle-page.component.scss']
})
export class PuzzlePageComponent implements OnInit {
  public guesses: String[] = [];
  
  constructor(private wordService: WordService, private router: Router) { }

  ngOnInit(): void {
    if(!this.wordService.getWord()){
      this.router.navigate([''])
    }

    //this is how the theme can be changed to light mode
    //document.documentElement.setAttribute('color-theme', 'light');
  }
  
  addGuess(guess: String){
    this.guesses.push(guess);
  }
}
