import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentRegisterService {
  private apiUrl = 'http://localhost:3000/api'; // Asegúrate que coincida con la URL de tu backend

  constructor(private http: HttpClient) {}

  // Método para registrar una cita
  registerAppointment(appointmentData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/appointments`, appointmentData);
  }
}
