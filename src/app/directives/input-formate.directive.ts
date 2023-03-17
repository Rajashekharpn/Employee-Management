import { Directive, HostListener, ElementRef, Input } from '@angular/core';


@Directive({
  selector: '[appInputFormate]'
})
export class InputFormateDirective {
  @Input('appInputFormate') val: any;

  constructor(private el: ElementRef) { }
  @HostListener('blur') onBlur() {
    const input: string = this.el.nativeElement.value;
    this.val === 'upperCase' ? this.el.nativeElement.value = input.toLocaleUpperCase() :
      this.el.nativeElement.value = input.toLocaleLowerCase();
  }

}
