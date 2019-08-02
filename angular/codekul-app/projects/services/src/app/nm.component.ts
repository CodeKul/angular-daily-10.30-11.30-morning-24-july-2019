import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nm',
  template: `
    <div class="row">
      <div class="col-md-12">
        <input type="button" class="btn btn-info" value="Okay" (click)="clk()">{{num}}
      </div>
    </div> 
  `,
  styles: [],
  providers : [DataService]
})
export class NmComponent implements OnInit {

  num: number = 0
  constructor(
    private dt: DataService
  ) { }

  ngOnInit() {
  }

  clk() {
    this.num = this.dt.cnt++
  }
}
