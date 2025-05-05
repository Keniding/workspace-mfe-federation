import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownOption } from './dropdown.interface';

@Component({
  selector: 'lib-dropdown',
  imports: [CommonModule, DropdownModule, FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ],
})
export class DropdownComponent<T = DropdownOption> implements ControlValueAccessor {
  @Input() id = '';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() options: DropdownOption<T>[] = [];
  @Input() optionLabel = 'label';
  @Input() optionValue = 'value';
  @Input() disabled = false;

  @Output() selectionChange = new EventEmitter<T>();

  selectedItem: T | null = null;
  onChange: (value: T | null) => void = () => { /* noop */ };
  onTouched: () => void = () => { /* noop */ };

  onSelectionChange(value: T) {
    this.selectedItem = value;
    this.onChange(value);
    this.onTouched();
    this.selectionChange.emit(value);
  }

  writeValue(value: T | null): void {
    this.selectedItem = value;
  }

  registerOnChange(fn: (value: T | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
