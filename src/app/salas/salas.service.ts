import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalasService {
  private BaseUrl = 'http://localhost:8080/uwu/salas'

  constructor(private http : HttpClient) { }

  createRoom(roomData : any): Observable<any>{
    return this.http.post(`${this.BaseUrl}/add`, roomData)
  }
  obtenerSalasDisponibles(): Observable<any> {
    return this.http.get(`${this.BaseUrl}/todas`);
  }
  joinRoomByCode(codigo: number): Observable<any> {
    return this.http.get(`${this.BaseUrl}/join/${codigo}`, { responseType: 'text' });
  }
}
