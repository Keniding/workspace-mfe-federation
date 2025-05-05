import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent, ButtonComponent, Severity } from '@workspace-mfe-federation/atoms';
import { Card } from 'primeng/card';
import { Avatar } from 'primeng/avatar';
import { PrimeTemplate } from 'primeng/api';

@Component({
  selector: 'lib-profile-card',
  imports: [
    CommonModule,
    Card,
    Avatar,
    BadgeComponent,
    PrimeTemplate,
    ButtonComponent,
  ],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  @Input() name = '';
  @Input() description = '';
  @Input() avatarUrl = '';
  @Input() status = '';
  @Input() statusSeverity: Severity = 'info';
  @Input() primaryButtonLabel = '';
  @Input() secondaryButtonLabel = '';
  @Input() primaryButtonSeverity: Severity = 'primary';

  @Output() primaryClick = new EventEmitter<MouseEvent>();
  @Output() secondaryClick = new EventEmitter<MouseEvent>();

  get showFooter(): boolean {
    return !!this.primaryButtonLabel || !!this.secondaryButtonLabel;
  }

  getInitials(name: string): string {
    if (!name) return '';
    return name
      .split(' ')
      .map((part) => part.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }
}
