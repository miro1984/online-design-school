import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/admin-panel/pages/dashboard/dashboard.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CalendarComponent } from './components/admin-panel/pages/calendar/calendar.component';
import { ScheduleComponent } from './components/admin-panel/pages/schedule/schedule.component';
import { MessagesComponent } from './components/admin-panel/pages/messages/messages.component';
import { AnalyticsComponent } from './components/admin-panel/pages/analytics/analytics.component';
import { SettingsComponent } from './components/admin-panel/pages/settings/settings.component';

import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { SidenavComponent } from "./components/admin-panel/components/sidenav/sidenav.component";
import { MenuComponent } from './components/admin-panel/components/sidenav/menu/menu.component';
import { UserComponent } from './components/admin-panel/components/sidenav/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthenticationComponent,
    NotFoundComponent,
    CalendarComponent,
    ScheduleComponent,
    MessagesComponent,
    AnalyticsComponent,
    SettingsComponent,
    SidenavComponent,
    AdminPanelComponent,
    MenuComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
