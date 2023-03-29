import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'tw-word-entry',
  templateUrl: './word-entry.component.html',
  styleUrls: ['./word-entry.component.scss'],
})
export class WordEntryComponent implements OnInit {
  @Output()
  public onGuess = new EventEmitter<String>();
  public guess: String[] = [];
  public answer!: String;

  constructor(private wordService: WordService) {}

  ngOnInit(): void {
    this.answer = this.wordService.getWord();
    console.log(this.answer);
    for (let i = 0; i < this.answer.length; i++) {
      this.guess.push('');
    }
    console.log(this.guess);
  }

  public submitGuess() {
    console.log(this.guess);
    if (this.guess.includes('')) {
      //TODO: add validation
      console.error('guess cannot contain empty string');
    }

    this.onGuess.emit(this.guess.join(''));
    this.guess = [];
  }

  focusIndex(index: Number){
    //TODO: allow for baskspaced to not change focus
    if(index == this.answer.length){
      document.getElementById('submit-button')?.focus();
    }

    document.getElementById('char-' + index)?.focus();
  }
}
