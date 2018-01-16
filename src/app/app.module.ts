import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ngx-bootstrap imports

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  entryComponents:[
    ModalComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
