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
  public answer!: String;
  public gameOver: boolean = false;
  public winner: boolean = false;

  constructor(private wordService: WordService, private router: Router) { }

  ngOnInit(): void {
    this.answer = this.wordService.getWord();
    if (!this.answer) {
      this.router.navigate([''])
    }
    //this is how the theme can be changed to light mode
    //document.documentElement.setAttribute('color-theme', 'light');
  }

  addGuess(guess: String) {
    this.guesses.push(guess);
    if (this.checkWin(guess)) {
      this.activateVictory();
      return;
    }
    if (this.guesses.length >= 6) {
      this.gameOver = true;
    }
  }

  activateVictory() {
    this.winner = true;
    this.gameOver = true;
  }

  reloadGame() {
    this.router.navigate([''])
  }

  checkWin(guess: String): boolean {
    return guess.toLowerCase() === this.answer.toLowerCase();
  }
}

// TODO: Take the logic to check if victory out of the guess component and check it whenever a guess is generated.
// TODO: Add a letters to a list when they are completely wrong. Prevent the user from entering those letters.
