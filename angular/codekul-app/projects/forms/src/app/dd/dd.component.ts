import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dd',
  templateUrl: './dd.component.html',
  styleUrls: ['./dd.component.css']
})
export class DdComponent implements OnInit {

  fg: FormGroup
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.fg = this.fb.group({
      flNm: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      mobile: this.fb.control('', Validators.required)
    })
  }

  onSub() {
    console.log(`Form Submitted `)
    console.log(this.fg)
  }
}
