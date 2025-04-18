import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  title: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  navItems: NavItem[] = [
    { title: 'Dashboard', icon: 'dashboard', route: '/' },
    { title: 'Customers', icon: 'people', route: '/customers' },
    { title: 'Orders', icon: 'shopping_cart', route: '/orders' },
    { title: 'Products', icon: 'inventory', route: '/products' },
    { title: 'Reports', icon: 'assessment', route: '/reports' },
    { title: 'Settings', icon: 'settings', route: '/settings' }
  ];
}