import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent {
  @Input() value: number = 0;
  @Input() change: number = 0;
  @Input() icon: string = '';
  @Input() isCurrency: boolean = false;
  @Input() isPercentage: boolean = false;

  get formattedValue(): string {
    if (this.isCurrency) {
      return '$' + this.value.toLocaleString();
    }
    if (this.isPercentage) {
      return this.value + '%';
    }
    return this.value.toString();
  }

  get changeColor(): string {
    return this.change >= 0 ? 'primary' : 'warn';
  }

  get changeIcon(): string {
    return this.change >= 0 ? 'arrow_upward' : 'arrow_downward';
  }
}