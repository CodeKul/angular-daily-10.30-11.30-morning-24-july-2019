import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome to codekul';
  typ = 'text'

  btnClkalvjlkzkxjvlk(ev: any) {
    console.log(ev)
  }

  keyIsUp( ev : any) {
    console.log(ev)
    this.title = ev.target.value
  }
}
