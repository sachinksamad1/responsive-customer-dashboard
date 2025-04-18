import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeService } from './services/theme.service';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSlideToggleModule,
    HeaderComponent,
    SidenavComponent,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Customer Dashboard';
  
  constructor(private themeService: ThemeService) {}

  get isDark(): boolean {
    return this.themeService.isDark();
  }

  ngOnit(){
    effect(() => {
      document.body.classList.toggle('dark-theme', this.isDark);
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}