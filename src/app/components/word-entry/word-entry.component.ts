import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'tw-word-entry',
  templateUrl: './word-entry.component.html',
  styleUrls: ['./word-entry.component.scss'],
})
export class WordEntryComponent implements OnInit {
  @Output()
  public onGuess = new EventEmitter<string>();
  public guess: string[] = [];
  public greyLetters: string[] = [];
  public answer!: string;
  public error!: string;

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.answer = this.wordService.getWord();
    for (let i = 0; i < this.answer.length; i++) {
      this.guess.push('');
    }
  }
  public submitGuess() {
    this.error = "";
    if (this.guess.includes('') || this.guess.length != this.answer.length) {
      this.error = "You must enter a letter for each box";
      return;
    }

    this.guess.forEach(char => {
      if (char.match(/[a-zA-Z]*/g)?.[0] == "") {
        this.error = "guess must only include letters"
      }
    });

    if (this.error) {
      return;
    }

    this.guess.forEach(this.getGreyLetters);
    this.onGuess.emit(this.guess.join(''));
    this.guess = [];
  }

  public focusIndex(index: number) {
    let el: HTMLInputElement = <HTMLInputElement>document.getElementById('char-' + (index - 1))
    if (this.greyLetters.includes(el.value)) {
      el.value = "" //clear out HTMl element
      el.classList.add('ng-invalid'); //make sure element is marked as invalid
      this.guess[index - 1] = ""  //clear out model for validation
      return;
    }
    if (index == this.answer.length) {
      document.getElementById('submit-button')?.focus();
    }
    if (this.guess[index - 1] != '') {
      document.getElementById('char-' + index)?.focus();
    }
  }

  private getGreyLetters = (letter: string) => {
    if (!this.answer.includes(letter)) {
      this.greyLetters.push(letter);
    }
  }
}
