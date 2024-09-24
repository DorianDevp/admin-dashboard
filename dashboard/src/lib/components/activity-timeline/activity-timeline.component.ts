import { Component } from '@angular/core';
import { Activity, activities } from './activity-timeline-data';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'shared-ui-activity-timeline',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatTabsModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './activity-timeline.component.html'
})
export class ActivityTimelineComponent {

  activityData: Activity[];

  constructor() {
    this.activityData = activities;
  }

}
