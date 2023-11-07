export class MensajeriaEntity {
    codigo: number; 
    mensajes: string; 

  
    constructor(codigo: number, mensajes: string) {
      this.codigo = codigo;
      this.mensajes = mensajes;
    }
  }