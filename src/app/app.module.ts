import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "../app/material.module";
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ReportsComponent } from './TimeKeeper/reports/reports.component';
import { ScheduleComponent } from './TimeKeeper/schedule/schedule.component';
import { LiveTrackingComponent } from './TimeKeeper/live-tracking/live-tracking.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from "../app/app-routing.module";
import { AgmCoreModule } from '@agm/core';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { GenerateScheduleComponent } from './TimeKeeper/generate-schedule/generate-schedule.component';
import { NgxEchartsModule } from "ngx-echarts";
import { BusStatusComponent } from './TimeKeeper/reports/widgets/pie-charts/bus-status/bus-status.component';
import { WarningListComponent } from './TimeKeeper/reports/widgets/tables/warning-list/warning-list.component';
import { ReportServicesComponent } from './Admin/report-services/report-services.component';
import { BusServicesComponent } from './Admin/bus-services/bus-services.component';
import { UsersServicesComponent } from './Admin/users-services/users-services.component';
import { RoutesServicesComponent } from './Admin/routes-services/routes-services.component';
import { ScheduleServicesComponent } from './Admin/schedule-services/schedule-services.component';
import { DashboardServicesComponent } from './Admin/dashboard-services/dashboard-services.component';
import { BusListComponent } from './Admin/bus-services/bus-list/bus-list.component';
import { BusAddComponent } from './Admin/bus-services/bus-add/bus-add.component';
import { BusEditComponent } from './Admin/bus-services/bus-edit/bus-edit.component';
import { BusLocationComponent } from './Admin/bus-services/bus-location/bus-location.component';
import { AddroutesComponent } from './Admin/routes-services/addroutes/addroutes.component';
import { MarkroutesComponent } from './Admin/routes-services/markroutes/markroutes.component';
import { RoutedirectionComponent } from './Admin/routes-services/routedirection/routedirection.component';

@NgModule({
    declarations: [
        AppComponent,
        SideNavComponent,
        ReportsComponent,
        ScheduleComponent,
        LiveTrackingComponent,
        LandingPageComponent,
        GenerateScheduleComponent,
        BusStatusComponent,
        WarningListComponent,
        ReportServicesComponent,
        BusServicesComponent,
        UsersServicesComponent,
        RoutesServicesComponent,
        ScheduleServicesComponent,
        DashboardServicesComponent,
        BusListComponent,
        BusAddComponent,
        BusEditComponent,
        BusLocationComponent,
        AddroutesComponent,
        MarkroutesComponent,
        RoutedirectionComponent
    ],
    imports: [
        BrowserModule,
        MDBBootstrapModule.forRoot(),
        MalihuScrollbarModule.forRoot(),
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule,
        NgxEchartsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDN6xOeAcpl6eRmbgtccJ36KiSRXKa6X04'
        })

    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
