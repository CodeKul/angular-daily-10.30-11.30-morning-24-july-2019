import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyValidator } from './my-validator';
import { ObsService } from '../obs.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-dd',
  templateUrl: './dd.component.html',
  styleUrls: ['./dd.component.css']
})
export class DdComponent implements OnInit {

  fg: FormGroup
  cnt : number
  constructor(
    private fb: FormBuilder,
    private obs: ObsService
  ) { }

  ngOnInit() {
    this.fg = this.fb.group({
      flNm: this.fb.control('', [Validators.required, MyValidator.isStFromA]),
      email: this.fb.control('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      mobile: this.fb.control('', Validators.required)
    })

    this.obs.sampleObservable().subscribe(
      num => console.log(num),
      err => console.log(err),
      () => console.log(`Completed`)
    )

    interval(2000).subscribe(
      tick => this.cnt = tick
    )
  }

  onSub() {
    console.log(`Form Submitted `)
    console.log(this.fg)
  }
}
