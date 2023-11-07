import { Component, OnInit } from '@angular/core';
import { SalasService } from '../salas.service';
import { ChatService } from 'src/app/mensajes/chat.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})

export class SalasComponent implements OnInit {
  filtroNombre: string = '';
  ordenAscendente: boolean = true;
  rooms: any[] = []
  selectedFile: File | null = null;
  newRoom: any = {
    nombre: '',
    descripcion: '',
    imagen: ''
  }
  constructor(private salaService: SalasService, private router: Router) {
    this.rooms = []
    
  }
  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms() {
    this.salaService.obtenerSalasDisponibles().subscribe((data) => {
      this.rooms = data;
    });
  }



  createRoom() {
    const formData = new FormData();
    formData.append('nombre', this.newRoom.nombre);
    formData.append('descripcion', this.newRoom.descripcion);
    if (this.selectedFile) {
      formData.append('imagen', this.selectedFile);
    }

    this.salaService.createRoom(formData).subscribe((data) => {
      this.loadRooms();
      this.newRoom = {
        nombre: '',
        descripcion: '',
        imagen: ''
      };
      this.selectedFile = null;
    });
  }
  unirseASala(codigoSala: number) {
    this.salaService.joinRoomByCode(codigoSala).subscribe(
      (response: string) => {
        console.log('Respuesta del servidor:', response);
        this.router.navigate(['/room', codigoSala]);
      },
      (error) => {
        console.error('Error al unirse a la sala', error);
      }
    );
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = file;
  }
  cambiarOrden(ascendente: boolean) {
    this.ordenAscendente = ascendente;
  }

}
