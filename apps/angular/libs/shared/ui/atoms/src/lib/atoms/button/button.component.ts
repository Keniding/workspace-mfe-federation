import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';
import { Severity } from '../../interfaces/severity.interface';

@Component({
  selector: 'lib-button',
  imports: [CommonModule, Button],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label = '';
  @Input() icon = '';
  @Input() disabled = false;
  @Input() customClass = '';
  @Input() severity: Severity = null;

  @Output() clickButton = new EventEmitter<MouseEvent>();
}
