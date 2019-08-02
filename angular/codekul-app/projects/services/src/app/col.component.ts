import { ColService } from './col.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-col',
  template: `
    <div class="row card mt-2 p-3">
      <div class="col-md-12">
        <div [ngStyle]="{'width' : '300px', 'height':'300px', 'background-color' : bkCl }">
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ColComponent implements OnInit {

  bkCl: string = 'red'

  constructor(
    private col: ColService
  ) { }

  ngOnInit() {

    // this.col.onChageColor(function (cl: string) {

    // })

    this.col.onChageColor((cl: string) => {
      this.bkCl = cl
    })
  }
}
