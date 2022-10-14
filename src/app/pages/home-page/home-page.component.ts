import { Component, OnInit } from '@angular/core';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'tw-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent{
  public word!: String;
  constructor(private wordService: WordService) { }

  public submit(){
    this.wordService.setWord(this.word);
  }
}
