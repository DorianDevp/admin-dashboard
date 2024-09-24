import { Component, input } from '@angular/core';
import { MenuItem } from 'libs/shared-ui/domain/src/index';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'shared-ui-app-sidebar',
  standalone: true,
  imports:[RouterModule, CommonModule, MatIcon, MatListModule, MatMenuModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SharedAppSidebarComponent {
  menuItems = input<MenuItem[]>([
    {
      name: 'test',
      icon: 'profile'
    }
  ]);
}
