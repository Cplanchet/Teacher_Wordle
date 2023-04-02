import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'tw-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public word!: String;
  public error!: String;
  constructor(private wordService: WordService, private router: Router) { }

  public submit() {
    this.error = "";

    if (!this.word) {
      this.error = "Word is required";
      return;
    }
    if (this.word.match(/[^a-zA-Z]*/g)?.[0] != "") {
      this.error = "Word must only contain letters";
      return;
    }

    this.wordService.setWord(this.word);
    this.router.navigate(["puzzle"]);
  }
}
