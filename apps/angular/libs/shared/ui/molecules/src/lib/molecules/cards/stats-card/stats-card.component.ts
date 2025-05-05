import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Severity } from '@workspace-mfe-federation/atoms';
import { Card } from 'primeng/card';

@Component({
  selector: 'lib-stats-card',
  imports: [CommonModule, Card],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.scss',
})
export class StatsCardComponent {
  @Input() title = '';
  @Input() value = '';
  @Input() subtitle = '';
  @Input() icon = '';
  @Input() iconSeverity: Severity = 'info';
  @Input() trend: 'up' | 'down' | 'neutral' = 'neutral';
  @Input() trendValue = '';
  @Input() trendLabel = '';

  get showTrend(): boolean {
    return !!this.trendValue;
  }

  getTrendIcon(): string {
    switch (this.trend) {
      case 'up':
        return 'pi pi-arrow-up';
      case 'down':
        return 'pi pi-arrow-down';
      default:
        return 'pi pi-minus';
    }
  }

  getTrendColor(): string {
    switch (this.trend) {
      case 'up':
        return 'var(--green-500)';
      case 'down':
        return 'var(--red-500)';
      default:
        return 'var(--text-color-secondary)';
    }
  }

  getIconColor(): string {
    switch (this.iconSeverity) {
      case 'success':
        return 'var(--green-500)';
      case 'info':
        return 'var(--blue-500)';
      case 'warn':
        return 'var(--yellow-500)';
      case 'danger':
        return 'var(--red-500)';
      case 'primary':
        return 'var(--primary-color)';
      default:
        return 'var(--text-color-secondary)';
    }
  }
}
