import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  usNm: string
  constructor(
    private actRt: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRt.params.subscribe(prm => {
      console.log(prm)
      this.usNm = prm['usNm']
    })

    this.actRt.queryParams.subscribe(prm => {
      this.usNm = `${this.usNm} - ttl - ${prm['my']}`
    })
  }
}
