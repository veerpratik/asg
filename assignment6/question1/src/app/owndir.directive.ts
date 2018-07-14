import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';



@Directive({
  selector: '[appOwndir]'
})
export class OwndirDirective {

  constructor(private ele:ElementRef) {

   }

   @HostListener('mouseenter') onmouseenter() //if mouse touche it it colors gets change
   {
     this.setcolor('Red');
   }
 
   @HostListener('mouseleave') onmouseleave()
   {
     this.setcolor('orange');
   }
 
   setcolor(color:string)
   {
     this.ele.nativeElement.style.background=color;
     this.ele.nativeElement.style.width = "300px";  // reduces size of 
   }

}
