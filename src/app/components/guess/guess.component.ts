import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'tw-guess-word',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.scss']
})
export class GuessComponent implements OnInit {
  @Input()
  public guess!: String;
  @Input()
  public answer!: String;

  ngOnInit(): void {
    this.answer = this.answer.toLocaleLowerCase();
    this.guess = this.guess.toLocaleLowerCase();
  }
}
