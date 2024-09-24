import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, input, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MenuItem } from 'libs/shared-ui/domain/src/index'
import { SharedAppSidebarComponent } from '../components/sidebar/sidebar.component';
import { SharedAppHeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'shared-ui-app-layout',
  standalone: true,
  templateUrl: './shared-ui-layout.component.html',
  styleUrls: [],
  imports: [
    SharedAppSidebarComponent, 
    SharedAppHeaderComponent, 
    MatButtonModule, 
    RouterOutlet, 
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
  ]
})
export class SharedLayoutComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  menuItems = input<MenuItem[]>([]);

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 1024px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
