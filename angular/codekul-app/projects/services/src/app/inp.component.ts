import { ColService } from './col.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inp',
  template: `
    <div class="row card mt-2 p-3">
      <div class="col-md-12">
        <input type="text" #col>
        <input 
          type="button" 
          value="Okay" 
          class="btn btn-info" 
          (click)="clk(col.value)">
      </div>
    </div>
  `,
  styles: []
})
export class InpComponent implements OnInit {

  constructor(
    private col : ColService
  ) { }

  ngOnInit() {
  }

  clk(col : string) {
    this.col.changeColor(col)
  }
}
