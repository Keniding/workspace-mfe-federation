import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-mobile-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.scss',
})
export class MobileNavbarComponent {
  private readonly _isMobileMenuOpen = signal(false);

  isMobileMenuOpen() {
    return this._isMobileMenuOpen();
  }

  toggleMobileMenu() {
    this._isMobileMenuOpen.set(!this._isMobileMenuOpen());
  }
}
