import { Directive, ElementRef } from '@angular/core';



@Directive({
  selector: '[appOwndirective]'
})
export class OwndirectiveDirective {

  constructor(private ele:ElementRef) {
    this.ele.nativeElement.style = "color:red";
    this.ele.nativeElement.style = "font-weight : bold";
    this.setcolor('yellow');

   }


   setcolor(color:string)
   {
     this.ele.nativeElement.style.background=color;
     this.ele.nativeElement.style.width = "300px"; 
    // this.ele.nativeElement.style = "font-weight : bold"; // reduces size of 
   }

}
