import { TestBed } from '@angular/core/testing';

import { WordService } from './word.service';

describe('WordService', () => {
  let service: WordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to set word', () =>{
    service.setWord('test');
    expect(service.getWord()).toBe('test');
  });

  it('should be able to get word', () =>{
    service.setWord('test');
    expect(service.getWord()).toBe('test');
  });
});
