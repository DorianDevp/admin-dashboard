import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'shared-ui-profile',
  standalone: true,
  imports: [
    MatCardModule,

  ],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {

  constructor() { }
}
