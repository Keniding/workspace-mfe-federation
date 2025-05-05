import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
  selector: 'lib-checkbox',
  imports: [CommonModule, Checkbox, FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent {
  @Input() id = '';
  @Input() label = '';
  @Input() disabled = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  checked = false;
  onChange: (value: boolean) => void = () => {
    /* noop */
  };
  onTouched: () => void = () => {
    /* noop */
  };

  onModelChange(checked: boolean) {
    this.checked = checked;
    this.onChange(checked);
    this.checkedChange.emit(checked);
  }

  writeValue(checked: boolean): void {
    this.checked = checked;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
