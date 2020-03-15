import { ElementRef } from '@angular/core';
import { HighlightItemDirective } from './highlight-item.directive';

describe('HighlightItemDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightItemDirective(new ElementRef(null));
    expect(directive).toBeTruthy();
  });
});
