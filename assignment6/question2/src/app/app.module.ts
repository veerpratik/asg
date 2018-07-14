import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
 // add kele mahe

import {OwndirectiveDirective} from './owndirective.directive';

@NgModule({
  declarations: [
    AppComponent,
  
    OwndirectiveDirective
  ],
  imports: [
    BrowserModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
