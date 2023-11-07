import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SalasComponent } from './salas/salas/salas.component';
import { RouterModule } from '@angular/router';
import { MensajesComponent } from './mensajes/mensajes/mensajes.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { CustomOrderPipe } from './salas/salas/custom-order.pipe';
import { SalaslistComponent } from './salaslist/salaslist/salaslist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    SalasComponent,
    MensajesComponent,
    NavbarComponent,
    CustomOrderPipe,
    SalaslistComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
