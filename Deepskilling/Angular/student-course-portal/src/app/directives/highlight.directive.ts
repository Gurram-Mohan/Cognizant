import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

// Hands-On 3: Custom Attribute Directive - HighlightDirective
// Changes background on hover to visually highlight the element
@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight = '#e8f4f8'; // default highlight color
  @Input() defaultColor = 'transparent';

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.transition = 'background-color 0.3s ease';
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.style.backgroundColor = this.defaultColor;
  }
}
