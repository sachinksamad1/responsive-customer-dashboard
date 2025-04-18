import { Component, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-sales-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.scss']
})
export class SalesChartComponent {
  constructor() {
    Chart.register(...registerables);
    
    afterNextRender(() => {
      this.createChart();
    });
  }

  createChart() {
    const ctx = document.getElementById('salesChart') as HTMLCanvasElement;
    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Sales 2023',
          data: [65, 59, 80, 81, 56, 55, 40, 72, 88, 94, 101, 118],
          borderColor: '#3f51b5',
          backgroundColor: 'rgba(63, 81, 181, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}