import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private word!: string;
  constructor() { }

  public getWord(): string {
    return this.word
  }

  public setWord(word: string): void {
    this.word = word;
  }
}
