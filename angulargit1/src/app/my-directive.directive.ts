import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor( private elementRef:ElementRef) {
    elementRef.nativeElement.style.background = 'pink';
    elementRef.nativeElement.style.color='white';
   }

   @HostBinding('style.background')background:string;


   @HostListener('mouseenter')
mouseEnter(){
  this.background='blue';
// console.log('mouseEnter');
// alert('mouseEnter')
// this.elementRef.nativeElement.style.background = 'red';
//     this.elementRef.nativeElement.style.color='white';

}
@HostListener('mouseleave')
mouseLeave(){
  this.background='purple';
// this.elementRef.nativeElement.style.background = 'green';
//     this.elementRef.nativeElement.style.color='white';


}
}