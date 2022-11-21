import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// dynamic form builder


//import {} from './'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';



@NgModule({
  imports:[ 
    BrowserModule, 
    ReactiveFormsModule , 
    DynamicFormBuilderModule
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
