import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, Severity } from '@workspace-mfe-federation/atoms';
import { Card } from 'primeng/card';
import { PrimeTemplate } from 'primeng/api';

@Component({
  selector: 'lib-form-card',
  imports: [CommonModule, Card, ButtonComponent, PrimeTemplate],
  templateUrl: './form-card.component.html',
  styleUrl: './form-card.component.scss',
})
export class FormCardComponent {
  @Input() title = '';
  @Input() submitLabel = 'Guardar';
  @Input() cancelLabel = 'Cancelar';
  @Input() submitSeverity: Severity = 'primary';
  @Input() submitDisabled = false;

  @Output() cardSubmit = new EventEmitter<MouseEvent>();
  @Output() cardCancel = new EventEmitter<MouseEvent>();
}
