import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../models/Event';
import { Action } from '../../models/Action';
import { EventService } from '../../services/eventService';
import { ActionService } from '../../services/actionService';

@Component({
  selector: 'app-event-details',
  templateUrl: './eventDetails.component.html',
})
export class EventDetailsComponent implements OnInit {
  event: Event | undefined;
  actions: Action[] = [];

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private actionService: ActionService,
  ) {
    this.actions = this.actionService.getActionsByEventId('1');
  }

  ngOnInit() {
    const eventId = this.route.snapshot.params['id'];
    this.event = this.eventService.getEventById(eventId);
    this.actions = this.actionService.getActionsByEventId(eventId);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.actions = this.actionService.getActionsByEventId('1');
  }
}
