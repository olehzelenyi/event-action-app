// event-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/Event';
import { EventService } from '../../services/eventService';
import { ActionService } from '../../services/actionService';
import { Action } from '../../models/Action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event-list',
  templateUrl: './eventList.component.html',
})
export class EventListComponent implements OnInit {
  events: Event[] = [];

  constructor(
    private eventService: EventService,
    private actionService: ActionService,
  ) {}

  ngOnInit() {
    this.events = this.eventService.getAllEvents();
  }
  create(eventId: string) {
    const action = new Action({
      eventId: eventId,
      performedDate: Date.now(),
      dueDate: new Date(),
      attachedFile: null,
    });
    this.actionService.createAction(action);
  }
  read() {}

  update() {}
  delete() {}
}
