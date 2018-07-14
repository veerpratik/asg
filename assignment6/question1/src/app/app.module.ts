import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDirDirective } from './my-dir.directive';
import { OwndirDirective } from './owndir.directive';
import { OneComponent } from './one/one.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDirDirective,
    OwndirDirective,
    OneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
