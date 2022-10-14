import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordService } from 'src/app/services/word.service';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let mockWordService: any;
  let setWordSpy: any;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    mockWordService = jasmine.createSpyObj(WordService, ['setWord']);
    setWordSpy = mockWordService.setWord;

    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      providers: [{provide: WordService, useValue: mockWordService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
