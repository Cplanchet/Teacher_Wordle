import { Component, Input, OnInit } from '@angular/core';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'tw-guess-word',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.scss']
})
export class GuessComponent implements OnInit {
  @Input() 
  public guess!: String;
  public answer!: String;

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.answer = this.wordService.getWord();
  }
}
