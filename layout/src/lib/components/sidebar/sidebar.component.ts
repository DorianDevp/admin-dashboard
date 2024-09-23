import { ChangeDetectorRef, Component, input, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItem } from 'libs/shared-ui/domain/src/index';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'shared-app-sidebar',
  standalone: true,
  imports:[RouterModule, CommonModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SharedAppSidebarComponent {
  menuItems = input<MenuItem[]>();
}
