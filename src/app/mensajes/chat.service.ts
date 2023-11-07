import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chatApiUrl = 'http://localhost:8080/uwu/mensajes';
  private BaseUrl = 'http://localhost:8080/uwu/salas'

  constructor(private http: HttpClient) { }
  sendMessage(message: string, salaId: number): Observable<any> {
    let url = `${this.chatApiUrl}/send/${salaId}`;
    return this.http.post(url, { message, sala_id: salaId });
  }
  getAllMessages(salaId: number): Observable<any> {
    return this.http.get(`${this.chatApiUrl}/messages/${salaId}`);
  }
  getRoomDetails(salaId: number): Observable<any> {
    return this.http.get(`${this.BaseUrl}/details/${salaId}`);
  }
 
}
