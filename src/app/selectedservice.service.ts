import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedserviceService {
  private selectedSala: any | null = null;

  constructor() { }

  setSelectedSala(sala: any) {
    this.selectedSala = sala;
  }

  getSelectedSala(): any | null {
    return this.selectedSala;
  }
}
