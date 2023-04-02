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
  public error!: String;

  constructor(private wordService: WordService) {}

  ngOnInit(): void {
    this.answer = this.wordService.getWord();
    console.log(this.answer);
    for (let i = 0; i < this.answer.length; i++) {
      this.guess.push('');
    }
  }
  public submitGuess() {
    this.error = "";
    if (this.guess.includes('')) {
      this.error = "You must enter a letter for each box";
      return;
    }

    this.guess.forEach(char =>{
      if(char.match(/[a-zA-Z]*/g)?.[0] == ""){
        this.error = "guess must only include letters"
      }
    });

    if(this.error){
      return;
    }

    this.onGuess.emit(this.guess.join(''));
    this.guess = [];
  }

  focusIndex(index: number){
    if(index == this.answer.length){
      document.getElementById('submit-button')?.focus();
    }
    if (this.guess[index-1] != ''){
      document.getElementById('char-' + index)?.focus();
    }
  }
}
