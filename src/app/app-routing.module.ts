import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/admin-panel/pages/dashboard/dashboard.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AuthenticationComponent} from "./components/authentication/authentication.component";
import {CalendarComponent} from "./components/admin-panel/pages/calendar/calendar.component";
import {AnalyticsComponent} from "./components/admin-panel/pages/analytics/analytics.component";
import {MessagesComponent} from "./components/admin-panel/pages/messages/messages.component";
import {ScheduleComponent} from "./components/admin-panel/pages/schedule/schedule.component";
import {SettingsComponent} from "./components/admin-panel/pages/settings/settings.component";
import {AdminPanelComponent} from "./components/admin-panel/admin-panel.component";

const routes: Routes = [
  { path: '', component: AdminPanelComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'settings', component: SettingsComponent }
    ] },
  { path: 'authentification', component: AuthenticationComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
