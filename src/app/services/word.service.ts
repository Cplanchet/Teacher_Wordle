import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private word!: String;
  constructor() { }
  
  public getWord(): String{
    return this.word
  }

  public setWord(word: String): void{
    this.word = word;
  }
}
