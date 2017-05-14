
import { Directive, ElementRef, Renderer, HostListener } from "@angular/core";

@Directive({
     selector: '[myHighlight]' 
    })

export class HighlightDirective {
        el: ElementRef;
        renderer: Renderer;
 

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
      this.renderer.setElementStyle(this.el.nativeElement, 'background-color', color);
  }

  
     constructor(el: ElementRef,renderer: Renderer) {
      // el.nativeElement.style.backgroundColor = 'yellow';
      this.renderer = renderer;
      this.el = el
    }
}