import { MediaMatcher } from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, input } from '@angular/core';
import { MenuItem } from 'libs/shared-ui/domain/src/index';
import { SharedAppSidebarComponent } from '../components/sidebar/sidebar.component';
import { SharedAppHeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'shared-app-layout',
  standalone: true,
  templateUrl: 'full.component.html',
  styleUrls: [],
  imports: [SharedAppSidebarComponent, SharedAppHeaderComponent]
})
export class LayoutComponent {
  mobileQuery: MediaQueryList;

  menuItems = input<MenuItem[]>([]);

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
  ) {}
}
