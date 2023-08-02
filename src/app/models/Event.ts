export interface IEvent {
  id: string;
  title: string;
  frequency: number;
}
export class Event implements IEvent {
  id: string;
  title: string;
  frequency: number;

  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
    this.frequency = data.frequency;
  }
}
