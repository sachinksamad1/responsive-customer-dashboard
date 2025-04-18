import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { StatsCardComponent } from '../widgets/stats-card/stats-card.component';
import { ActivityListComponent } from '../widgets/activity-list/activity-list.component';
import { SalesChartComponent } from '../widgets/sales-chart/sales-chart.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    StatsCardComponent,
    ActivityListComponent,
    SalesChartComponent,
    MatDividerModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Input() isCurrency: boolean =false;
  @Input() isPercentage: boolean =false;
  cards = [
    { title: 'Total Customers', cols: 1, rows: 1 },
    { title: 'Revenue', cols: 1, rows: 1 },
    { title: 'Conversion Rate', cols: 1, rows: 1 },
    { title: 'Active Users', cols: 1, rows: 1 },
    { title: 'Recent Activity', cols: 2, rows: 2 },
    { title: 'Sales Overview', cols: 2, rows: 2 }
  ];
}