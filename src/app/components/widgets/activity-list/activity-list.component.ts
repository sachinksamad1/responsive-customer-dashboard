import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

interface Activity {
  id: number;
  user: string;
  action: string;
  time: string;
  avatar: string;
}

@Component({
  selector: 'app-activity-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, MatDividerModule],
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent {
  activities: Activity[] = [
    {
      id: 1,
      user: 'John Smith',
      action: 'placed a new order',
      time: '10 minutes ago',
      avatar: 'JS'
    },
    {
      id: 2,
      user: 'Sarah Johnson',
      action: 'updated payment info',
      time: '25 minutes ago',
      avatar: 'SJ'
    },
    {
      id: 3,
      user: 'Michael Brown',
      action: 'requested a refund',
      time: '1 hour ago',
      avatar: 'MB'
    },
    {
      id: 4,
      user: 'Emily Davis',
      action: 'submitted a review',
      time: '2 hours ago',
      avatar: 'ED'
    },
    {
      id: 5,
      user: 'Robert Wilson',
      action: 'contacted support',
      time: '3 hours ago',
      avatar: 'RW'
    }
  ];
}