export interface DropdownOption<T = unknown> {
  label: string;
  value: T;
  [key: string]: unknown;
}
