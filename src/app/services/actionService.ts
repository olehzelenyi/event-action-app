import {Action} from "../models/Action";

export class ActionService {
  actions: Action[] = [];

  createAction(action: Action){
    this.actions.push({...action, id: `${this.actions.length + 1}}`});
    console.log(this.actions)
  }

  getActionsByEventId(eventId: string){
    return this.actions.filter((action) =>  action.eventId === eventId)
  }

  updateAction(actionId: string) {
  //Processing
  }

  deleteAction(actionId: string): Action[] {
    this.actions = this.actions.filter((action) => action.id !== actionId)
    return this.actions;
  }

}

