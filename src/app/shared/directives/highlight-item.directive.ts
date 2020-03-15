import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightItem]'
})
export class HighlightItemDirective {
  constructor(private el: ElementRef) {
  }

  @Input('appHighlightItem') highlightColor: string;

  @HostListener('mouseenter', ['$event'])
  enter(event: Event) {
    console.log('mouseenter event on item element');
    this.highlight(this.highlightColor || 'green');
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: Event) {
    console.log('mouseleave event on item element');
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}


