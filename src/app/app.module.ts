import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EventListComponent } from './components/eventList/eventList.component';
import { ActionService } from './services/actionService';
import { EventService } from './services/eventService';
import { EventDetailsComponent } from './components/eventDetails/eventDetails.component';
import { ActionListComponent } from './components/actionList/actionList.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailsComponent,
    ActionListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ActionService, EventService],
  bootstrap: [AppComponent],
})
export class AppModule {}
