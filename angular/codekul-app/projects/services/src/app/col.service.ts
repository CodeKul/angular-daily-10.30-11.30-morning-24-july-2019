import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColService {

  private em: EventEmitter<string> = new EventEmitter()
  constructor() { }

  changeColor(col: string) {
    //emit
    this.em.emit(col)
  }

  onChageColor(fn: (cl: string) => void) {
    //receive
    this.em.subscribe(fn)
  }
}
