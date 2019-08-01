import { Directive, OnInit, ElementRef, Renderer2, HostBinding, HostListener, Host } from '@angular/core';

@Directive({
  selector: '[appSizer]'
})
export class SizerDirective implements OnInit {

  @HostBinding('style.border')
  brd: string

  @HostBinding('style.width.px')
  wd: number

  constructor(
    private elRf: ElementRef,
    private rend: Renderer2
  ) { }

  ngOnInit() {
    // this.elRf.nativeElement.style.border = '1px solid red'
    console.log(this.elRf.nativeElement)
    // this.rend.setStyle(this.elRf.nativeElement,'border', '1px solid red')

    this.brd = '1px solid red'
  }

  @HostListener('mouseenter')
  mouseIn() {
    this.wd = 200
  }
}
