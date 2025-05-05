import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, Severity } from '@workspace-mfe-federation/atoms';
import { Card } from 'primeng/card';
import { PrimeTemplate } from 'primeng/api';

@Component({
  selector: 'lib-alert-card',
  imports: [CommonModule, Card, ButtonComponent, PrimeTemplate],
  templateUrl: './alert-card.component.html',
  styleUrl: './alert-card.component.scss',
})
export class AlertCardComponent {
  @Input() title = '';
  @Input() severity: 'success' | 'info' | 'warning' | 'danger' = 'info';
  @Input() dismissible = false;
  @Input() actionLabel = '';

  @Output() dismiss = new EventEmitter<void>();
  @Output() action = new EventEmitter<MouseEvent>();

  getIcon(): string {
    switch (this.severity) {
      case 'success':
        return 'pi-check-circle';
      case 'info':
        return 'pi-info-circle';
      case 'warning':
        return 'pi-exclamation-triangle';
      case 'danger':
        return 'pi-times-circle';
      default:
        return 'pi-info-circle';
    }
  }

  getButtonSeverity(): Severity {
    switch (this.severity) {
      case 'success':
        return 'success';
      case 'info':
        return 'info';
      case 'warning':
        return 'warn';
      case 'danger':
        return 'danger';
      default:
        return 'info';
    }
  }
}
