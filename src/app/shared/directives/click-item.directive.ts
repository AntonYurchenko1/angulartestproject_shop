import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClickItem]'
})
export class ClickItemDirective {
  @Input('appClickItem') useDblClick: boolean;
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click')
  clicked() {
    this.renderer.addClass(this.el.nativeElement, 'spec_highlight');
  }

  @HostListener('dblclick')
  dblClicked() {
    if (this.useDblClick) {
      this.renderer.removeClass(this.el.nativeElement, 'spec_highlight');
    }
  }

}
