import { Directive HostListener, ElementRef, Renderer, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListerner('mouseenter') onMouserOver(){
     /*this._renderer.setElementStyle(
       this._elementRef.nativeElement,
       'background-color', 'yellow'
     );*/
     this.backgroundColor = 'yellow';
  }

  @HostListerner('mouseleave') onMouseLeave(){
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'white'
    );*/
    this.backgroundColor = 'white';
 }

//@HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor(){
    //codigo extra;
    return this.backgroundColor;
  }
  private backgroundColor: string;
  constructor(
    //private _elementRef: ElementRef,
   // private _renderer: Renderer
    ) { }

}
