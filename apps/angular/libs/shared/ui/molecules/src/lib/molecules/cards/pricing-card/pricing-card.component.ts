import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'primeng/card';
import { BadgeComponent, ButtonComponent } from '@workspace-mfe-federation/atoms';

@Component({
  selector: 'lib-pricing-card',
  imports: [CommonModule, Card, BadgeComponent, ButtonComponent],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.scss',
})
export class PricingCardComponent {
  @Input() title = '';
  @Input() price = '';
  @Input() currencySymbol = 'S/.';
  @Input() billingPeriod = 'mes';
  @Input() description = '';
  @Input() features: string[] = [];
  @Input() buttonLabel = 'Seleccionar';
  @Input() featured = false;
  @Input() featuredText = 'Popular';

  @Output() buttonClick = new EventEmitter<MouseEvent>();
}
