import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@workspace-mfe-federation/molecules';

@Component({
  imports: [CommonModule, FooterComponent],
  selector: 'app-footer-entry',
  template: `<lib-footer></lib-footer>`,
})
export class RemoteEntryComponent {}
