import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/Event';
import { EventService } from '../../services/eventService';
import { ActionService } from '../../services/actionService';
import { Action } from '../../models/Action';

@Component({
  selector: 'app-event-list',
  templateUrl: './actionList.component.html',
})
export class ActionListComponent implements OnInit {
  events: Event[] = [];

  constructor(
    private eventService: EventService,
    private actionService: ActionService,
  ) {}

  ngOnInit() {
    const event = new Event({ id: '1', title: 'Create', frequency: 2 });
    this.eventService.addEvent(event);
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
