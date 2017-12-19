const PRIORITY = [
  'High',
  'Middle',
  'Low'
]
export class Task {
  id: number;
  name: string;
  startDate: string;
  finishDate: string;
  description: string;
  priority: number;
  completed: boolean = false;

  constructor(id: number, values: Object = {}) {
  	Object.assign(this, values);
  	this.id = id;
  }

  // set priority(i: number) {
  //   this._priority = PRIORITY[i -1];
  // }

  // get priority(): string {
  //   return PRIORITY[this._priority - 1];
  // }
}