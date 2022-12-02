import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective implements OnInit{
  @Input('appHightlight')
  public color?: string;
  private active = true;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.color = this.color || 'yellow';
    this.element.nativeElement.style.backgroundColor = this.color;    
  }

  @HostListener('click')
  toggle() {
    this.active = !this.active;
    this.element.nativeElement.style.backgroundColor = this.active ? this.color : null;
  }

}
