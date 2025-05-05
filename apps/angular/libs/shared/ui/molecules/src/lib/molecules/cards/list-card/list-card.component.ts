import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, Severity } from '@workspace-mfe-federation/atoms';
import { Card } from 'primeng/card';
import { PrimeTemplate } from 'primeng/api';

@Component({
  selector: 'lib-list-card',
  imports: [CommonModule, Card, ButtonComponent, PrimeTemplate],
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.scss',
})
export class ListCardComponent<T> {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() items: T[] = [];
  @Input() emptyMessage = 'No hay elementos para mostrar';
  @Input() footerButtonLabel = '';
  @Input() footerButtonSeverity: Severity = 'primary';

  @Output() footerButtonClick = new EventEmitter<MouseEvent>();

  @ContentChild('itemTemplate') itemTemplate: TemplateRef<{ $implicit: T; index: number }> | undefined;
}
