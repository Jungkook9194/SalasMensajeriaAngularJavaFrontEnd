import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalasService } from 'src/app/salas/salas.service';

@Component({
  selector: 'app-salaslist',
  templateUrl: './salaslist.component.html',
  styleUrls: ['./salaslist.component.css']
})
export class SalaslistComponent implements OnInit {
  salas!: any[];
  message: string = '';
  selectedSala: any | null = null;
  filtroNombre: string = '';



  constructor(private salasService : SalasService, private router : Router){}
  ngOnInit(): void {
    this.salasService.obtenerSalasDisponibles().subscribe(data => {
      this.salas = data; 
    });
  }
  entrarASala(codigoSala: number) {
    this.selectedSala = this.salas.find(sala => sala.codigo === codigoSala);
    this.message = '';
    this.router.navigate(['room', codigoSala]);
  }
  cumpleFiltro(sala: any): boolean {
    return sala.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase());
  }
}
