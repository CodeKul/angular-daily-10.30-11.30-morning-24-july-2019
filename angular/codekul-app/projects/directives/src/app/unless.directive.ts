import { Directive, ElementRef, TemplateRef, Input, OnInit, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective implements OnInit {

  @Input('appUnless')
  isSh: boolean

  constructor(
    private tmRf: TemplateRef<any>,
    private vcRf: ViewContainerRef
  ) {

  }

  ngOnInit() {

    if (!this.isSh) {
      this.vcRf.createEmbeddedView(this.tmRf)
    } else {
      this.vcRf.clear()
    }
  }
}
