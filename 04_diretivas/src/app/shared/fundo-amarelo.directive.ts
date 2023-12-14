import { Directive  } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor
  private _elementRef: ElementRef,
  private _Renderer: Renderer { 
    //console.log(this._elementRef);
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setElementStyle(this._elementREf.nativeElement, 'background-color', 'yellow');
  }

}

