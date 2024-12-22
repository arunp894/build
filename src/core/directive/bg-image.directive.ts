import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBgImage]',
  standalone : true
})
export class BgImageDirective implements OnInit {
  @Input() appBgImage !: string;

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    const parent = this.elRef.nativeElement.parentElement;
    parent.style.backgroundImage = `url(${this.appBgImage})`;
    parent.style.backgroundSize = 'cover';
    parent.style.backgroundPosition = 'center';
    parent.style.display = 'block';
    this.elRef.nativeElement.style.display = 'none';
  }
}