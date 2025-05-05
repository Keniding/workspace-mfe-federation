import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AlertCardComponent, FormCardComponent, ImageCardComponent,
  ListCardComponent, PricingCardComponent,
  ProfileCardComponent,
  StatsCardComponent
} from '@workspace-mfe-federation/molecules';
import { DropdownModule } from 'primeng/dropdown';
import { InputText } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { Textarea } from 'primeng/textarea';

@Component({
  selector: 'app-vet-dashboard',
  imports: [
    CommonModule,
    AlertCardComponent,
    StatsCardComponent,
    ListCardComponent,
    ProfileCardComponent,
    ImageCardComponent,
    PricingCardComponent,
    FormCardComponent,
    DropdownModule,
    InputText,
    CalendarModule,
    Textarea,
  ],
  templateUrl: './vet-dashboard.component.html',
  styleUrl: './vet-dashboard.component.scss',
})
export class VetDashboardComponent {
  upcomingAppointments = [
    {
      petName: 'Max',
      ownerName: 'Carlos Rodríguez',
      type: 'Vacunación',
      time: '09:00 AM',
    },
    {
      petName: 'Bella',
      ownerName: 'María López',
      type: 'Control',
      time: '10:30 AM',
    },
    {
      petName: 'Rocky',
      ownerName: 'Juan Pérez',
      type: 'Urgencia',
      time: '11:15 AM',
    },
    {
      petName: 'Luna',
      ownerName: 'Ana Torres',
      type: 'Cirugía',
      time: '12:00 PM',
    },
    {
      petName: 'Simba',
      ownerName: 'Pedro Gómez',
      type: 'Dental',
      time: '15:30 PM',
    },
  ];

  petTypes = [
    { label: 'Perro', value: 'dog' },
    { label: 'Gato', value: 'cat' },
    { label: 'Ave', value: 'bird' },
    { label: 'Roedor', value: 'rodent' },
    { label: 'Reptil', value: 'reptile' },
    { label: 'Otro', value: 'other' },
  ];

  serviceTypes = [
    { label: 'Consulta General', value: 'general' },
    { label: 'Vacunación', value: 'vaccination' },
    { label: 'Control', value: 'checkup' },
    { label: 'Urgencia', value: 'emergency' },
    { label: 'Cirugía', value: 'surgery' },
    { label: 'Dental', value: 'dental' },
    { label: 'Grooming', value: 'grooming' },
  ];

  getAppointmentIcon(type: string): string {
    switch (type) {
      case 'Vacunación':
        return 'pi-heart';
      case 'Control':
        return 'pi-check-circle';
      case 'Urgencia':
        return 'pi-exclamation-triangle';
      case 'Cirugía':
        return 'pi-heart-fill';
      case 'Dental':
        return 'pi-plus-circle';
      default:
        return 'pi-calendar';
    }
  }

  getAppointmentColor(type: string): string {
    switch (type) {
      case 'Vacunación':
        return 'var(--blue-500)';
      case 'Control':
        return 'var(--green-500)';
      case 'Urgencia':
        return 'var(--red-500)';
      case 'Cirugía':
        return 'var(--purple-500)';
      case 'Dental':
        return 'var(--cyan-500)';
      default:
        return 'var(--text-color)';
    }
  }

  handleAlertDismiss() {
    console.log('Alerta de vacunación descartada');
  }

  navigateToVaccines() {
    console.log('Navegando al calendario de vacunación');
  }

  navigateToAppointments() {
    console.log('Navegando a la lista completa de citas');
  }

  viewPatientHistory(patientId: string) {
    console.log(`Ver historial del paciente: ${patientId}`);
  }

  contactOwner(ownerId: string) {
    console.log(`Contactar al dueño: ${ownerId}`);
  }

  scheduleService(serviceType: string) {
    console.log(`Agendar servicio: ${serviceType}`);
  }

  selectPlan(planType: string) {
    console.log(`Plan seleccionado: ${planType}`);
  }

  submitAppointmentRequest() {
    console.log('Solicitud de cita enviada');
  }

  clearAppointmentForm() {
    console.log('Formulario de cita limpiado');
  }

  callEmergency() {
    console.log('Llamando al servicio de emergencias');
  }
}
