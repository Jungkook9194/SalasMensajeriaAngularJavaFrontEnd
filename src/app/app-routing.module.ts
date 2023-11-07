import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalasComponent } from './salas/salas/salas.component';
import { AppComponent } from './app.component';
import { MensajesComponent } from './mensajes/mensajes/mensajes.component';

const routes: Routes = [
    { path: '', component: SalasComponent},
    { path: 'room/:codigo', component: MensajesComponent },
    

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}