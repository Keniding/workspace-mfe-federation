import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent, ButtonComponent, Severity } from '@workspace-mfe-federation/atoms';
import { Card } from 'primeng/card';
import { PrimeTemplate } from 'primeng/api';

@Component({
  selector: 'lib-image-card',
  imports: [CommonModule, Card, PrimeTemplate, BadgeComponent, ButtonComponent],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss',
})
export class ImageCardComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() imageUrl = '';
  @Input() imageAlt = '';
  @Input() imageHeight = '200px';
  @Input() badge = '';
  @Input() badgeSeverity: Severity = 'info';
  @Input() primaryButtonLabel = '';
  @Input() secondaryButtonLabel = '';
  @Input() primaryButtonSeverity: Severity = 'primary';

  @Output() primaryClick = new EventEmitter<MouseEvent>();
  @Output() secondaryClick = new EventEmitter<MouseEvent>();

  get showFooter(): boolean {
    return !!this.primaryButtonLabel || !!this.secondaryButtonLabel;
  }
}
