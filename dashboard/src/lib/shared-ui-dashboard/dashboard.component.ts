import { Component } from '@angular/core';
import { SalesOverviewComponent } from '../components/sales-overview/sales-overview.component';
import { OurVisiterComponent } from '../components/our-visiter/our-visiter.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { ContactsComponent } from '../components/contacts/contacts.component';
import { ActivityTimelineComponent } from '../components/activity-timeline/activity-timeline.component';

@Component({
	selector: 'shared-ui-dashboard',
	standalone: true,
	imports: [SalesOverviewComponent, OurVisiterComponent, ProfileComponent, ContactsComponent, ActivityTimelineComponent],
	templateUrl: './dashboard.component.html'
})
export class SharedDashboardComponent {

}
