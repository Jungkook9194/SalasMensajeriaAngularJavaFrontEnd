import { MensajeriaEntity } from "./mensajeria-entity";
export interface RespuestasEntity {
    codigo: number;
    respuesta: string;
    mensaje: MensajeriaEntity | null; 
}