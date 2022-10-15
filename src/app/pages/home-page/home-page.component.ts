import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'tw-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent{
  public word!: String;
  constructor(private wordService: WordService, private router: Router) { }

  public submit(){
    if(!this.word){
      //TODO: Add Validation
      console.log("Word is required")
    }

    this.wordService.setWord(this.word);

    this.router.navigate(["puzzle"]);
  }
}
