import { Component, OnInit } from '@angular/core';
import { AppointmentRegisterService } from './service/appointment-register.service.spec';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  appointmentData = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private appointmentRegisterService: AppointmentRegisterService) { }

  ngOnInit() {}

  // Método para enviar el formulario
  onSubmit() {
    this.appointmentRegisterService.registerAppointment(this.appointmentData).subscribe(
      response => {
        console.log('Appointment registered successfully', response);
      },
      error => {
        console.error('Error registering appointment', error);
      }
    );
  }
}
