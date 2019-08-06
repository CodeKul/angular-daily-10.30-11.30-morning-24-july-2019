import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.css']
})
export class TdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  frmSub(frm: NgForm) {
    console.log(frm)
    console.log(`Form Submitted`)
    console.log(frm.value)
  }
}
