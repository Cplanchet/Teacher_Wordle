import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PuzzlePageComponent } from './pages/puzzle-page/puzzle-page.component';
import { WordEntryComponent } from './components/word-entry/word-entry.component';
import { GuessComponent } from './components/guess/guess.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PuzzlePageComponent,
    WordEntryComponent,
    GuessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
