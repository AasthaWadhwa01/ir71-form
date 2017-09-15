import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule, ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { IrFormComponent } from './ir-form/ir-form.component';

@NgModule({
  declarations: [
    AppComponent,
    IrFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
