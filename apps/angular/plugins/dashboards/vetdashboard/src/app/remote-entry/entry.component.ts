import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { VetDashboardComponent } from '../vet-dashboard/vet-dashboard.component';

@Component({
  imports: [CommonModule, NxWelcomeComponent, VetDashboardComponent],
  selector: 'app-vetdashboard-entry',
  template: `<app-vet-dashboard></app-vet-dashboard>`,
})
export class RemoteEntryComponent {}
