// event.service.ts
import { Event } from '../models/Event';

export class EventService {
  events: Event[] = [
    {id: '001', title: "Event 1", frequency: 2},
    {id: '010', title: "Event 2", frequency: 3},
    {id: '011', title: "Event 3", frequency: 4},
  ];

  getAllEvents(): Event[] {
    return this.events;
  }

  getEventById(eventId: string): Event | undefined{
    return this.events.find((event) => event.id === eventId)
}

  addEvent(event: Event) {
    this.events.push(event);
  }

  updateEvent(event: Event) {
    // Implement update logic
  }

  deleteEvent(eventId: string) {
    this.events = this.events.filter((event) => event.id !== eventId)
    return this.events;
  }
}
