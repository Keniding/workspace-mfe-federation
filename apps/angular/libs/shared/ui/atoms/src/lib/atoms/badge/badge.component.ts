import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { Severity } from '../../interfaces/severity.interface';

type BadgeSeverity = 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';

const VALID_BADGE_SEVERITIES: readonly BadgeSeverity[] = [
  'success', 'info', 'warn', 'danger', 'secondary', 'contrast'
] as const;

// Mapa de conversión personalizado para cada tipo no compatible
const SEVERITY_MAP: Record<string, BadgeSeverity> = {
  'help': 'secondary',
  'primary': 'contrast',
};

@Component({
  selector: 'lib-badge',
  standalone: true,
  imports: [CommonModule, BadgeModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  @Input() value = '';
  @Input() text = '';
  @Input() severity: Severity = null;
  @Input() customClass = '';

  get badgeSeverity(): BadgeSeverity {
    if (!this.severity) return 'info';

    if (this.isBadgeSeverity(this.severity)) {
      return this.severity;
    }

    // Si no existe, usamos 'info' como fallback
    return SEVERITY_MAP[this.severity] || 'info';
  }

  private isBadgeSeverity(value: string): value is BadgeSeverity {
    return VALID_BADGE_SEVERITIES.includes(value as BadgeSeverity);
  }
}
