import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';

  isJmb = false

  langs = [
    'java',
    'cpp',
    'python',
    'js',
    'ts',
    'c'
  ]

  st = {
    border : '1px solid red'
  }

  clk() {
    this.isJmb = !this.isJmb
  }
}
