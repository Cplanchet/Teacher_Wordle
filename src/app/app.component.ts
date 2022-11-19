import { Component } from '@angular/core';

@Component({
  selector: 'tw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Teacher_Wordle';
  onLightmodeChange(e: any){
    if(e.target.checked){
      document.documentElement.setAttribute('color-theme', 'light');
      return;
    }
    document.documentElement.setAttribute('color-theme', 'dark');
  }
}
