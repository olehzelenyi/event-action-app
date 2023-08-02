import { ActionService } from '../services/actionService';
const actionService = new ActionService();

export interface IAction {
  id?: string;
  eventId: string;
  performedDate: Date;
  dueDate: Date;
  attachedFile: File | null;
}
export class Action implements IAction {
  id?: string;
  eventId: string;
  performedDate: Date;
  dueDate: Date;
  attachedFile: File | null;

  constructor(data: any) {
    this.id = `${actionService.actions.length + 1}`;
    this.eventId = data.eventId;
    this.performedDate = data.performedDate;
    this.dueDate = data.dueDate;
    this.attachedFile = data.attachedFile;
  }
}
