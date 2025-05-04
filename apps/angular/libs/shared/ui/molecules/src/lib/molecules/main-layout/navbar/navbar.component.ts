import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  route: string;
  subitems?: NavItem[];
}

@Component({
  selector: 'lib-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navItems: NavItem[] = [
    {
      label: 'Servicios',
      route: '/servicios',
      subitems: [
        { label: 'Consultas', route: '/servicios/consultas' },
        { label: 'Vacunación', route: '/servicios/vacunacion' },
        { label: 'Peluquería', route: '/servicios/peluqueria' }
      ]
    },
    {
      label: 'Veterinarias',
      route: '/veterinarias',
      subitems: [
        { label: 'Directorio', route: '/veterinarias/directorio' },
        { label: 'Emergencias', route: '/veterinarias/emergencias' }
      ]
    },
    {
      label: 'Reservas',
      route: '/reservas'
    },
    {
      label: 'Blog',
      route: '/blog',
      subitems: [
        { label: 'Artículos', route: '/blog/articulos' },
        { label: 'Consejos', route: '/blog/consejos' }
      ]
    }
  ];
}
