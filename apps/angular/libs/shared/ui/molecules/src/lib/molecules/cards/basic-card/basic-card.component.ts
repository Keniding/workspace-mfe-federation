import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, Severity } from '@workspace-mfe-federation/atoms';
import { Card } from 'primeng/card';
import { PrimeTemplate } from 'primeng/api';

@Component({
  selector: 'lib-basic-card',
  imports: [CommonModule, Card, ButtonComponent, PrimeTemplate],
  templateUrl: './basic-card.component.html',
  styleUrl: './basic-card.component.scss',
})
export class BasicCardComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() primaryButtonLabel = '';
  @Input() secondaryButtonLabel = '';
  @Input() primaryButtonSeverity: Severity = 'primary';

  @Output() primaryClick = new EventEmitter<MouseEvent>();
  @Output() secondaryClick = new EventEmitter<MouseEvent>();

  get showFooter(): boolean {
    return !!this.primaryButtonLabel || !!this.secondaryButtonLabel;
  }
}
