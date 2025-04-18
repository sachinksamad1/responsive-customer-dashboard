import { Injectable, computed, signal } from '@angular/core';

type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly themeKey = 'customer-dashboard-theme';
  private readonly _theme = signal<Theme>(
    (localStorage.getItem(this.themeKey) as Theme) || 'light'
  );

  theme = computed(() => this._theme());
  isDark = computed(() => this.theme() === 'dark');

  toggleTheme() {
    const newTheme = this._theme() === 'light' ? 'dark' : 'light';
    this._theme.set(newTheme);
    localStorage.setItem(this.themeKey, newTheme);
  }
}