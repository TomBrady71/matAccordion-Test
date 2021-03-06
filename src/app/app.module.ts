import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { MatExpansionModule } from '@angular/material';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatExpansionModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
