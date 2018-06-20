import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ReportsComponent } from './TimeKeeper/reports/reports.component';
import { ScheduleComponent } from './TimeKeeper/schedule/schedule.component';
import { LiveTrackingComponent } from './TimeKeeper/live-tracking/live-tracking.component';
import { GenerateScheduleComponent } from './TimeKeeper/generate-schedule/generate-schedule.component';

import { DashboardServicesComponent } from './Admin/dashboard-services/dashboard-services.component';
import { BusServicesComponent } from './Admin/bus-services/bus-services.component';
import { ReportServicesComponent } from './Admin/report-services/report-services.component';
import { RoutesServicesComponent } from './Admin/routes-services/routes-services.component';
import { ScheduleServicesComponent } from './Admin/schedule-services/schedule-services.component';
import { UsersServicesComponent } from './Admin/users-services/users-services.component';
import { BusListComponent } from './Admin/bus-services/bus-list/bus-list.component';
import { BusLocationComponent } from './Admin/bus-services/bus-location/bus-location.component';

const routes: Routes = [
    { path: '', redirectTo: 'Welcome', pathMatch: 'full' },
    { path: 'Welcome', component: LandingPageComponent },
    //   { path: 'DepartmentSummary', component: DepartmentSummeryComponent },
    {
        path: 'User', component: SideNavComponent,
        // canActivate: [AuthGuard],
        children: [
            { path: 'Schedule', component: ScheduleComponent },
              { path: 'Reports', component: ReportsComponent },
              { path: 'Livemap', component: LiveTrackingComponent },
              { path: 'GenerateSchedule', component: GenerateScheduleComponent },
            //   { path: 'Delivery', component: DeliveryComponent },
            { path: '**', component: LiveTrackingComponent, pathMatch: 'full' }
        ]
        // , data: {
        //   expectedRole: ['admin']
        // }
    },
    {
        path: 'Admin', component: SideNavComponent,
        // canActivate: [AuthGuard],
        children: [
            { path: 'Dashboard', component: DashboardServicesComponent },
            { path: 'AddBusses', component: BusServicesComponent },
              { path: 'Reports', component: ReportServicesComponent },
              { path: 'Routes', component: RoutesServicesComponent },
              { path: 'Users', component: UsersServicesComponent},
              { path: 'Schedules', component: ScheduleServicesComponent },
              { path: 'BusList', component: BusListComponent },
              { path: 'BusLocation', component: BusLocationComponent },
            { path: '**', component: LiveTrackingComponent, pathMatch: 'full' }
        ]
        // , data: {
        //   expectedRole: ['admin']
        // }
    },

];

@NgModule({
    declarations: [
    ],
    imports: [
        MaterialModule,
        RouterModule.forRoot(
            routes,
            { useHash: true }
        ),
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule { }