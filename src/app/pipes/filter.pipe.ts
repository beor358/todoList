import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../classes/task';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: Array<Task>, name: string, date: string, priority: number, completed: string): Array<any> {
    console.log(typeof completed);
        if (tasks && tasks.length) {
            return tasks.filter(task => {
                if (name) {
                  if(!task.name.toLowerCase().includes(name.toLowerCase())) {
                    return false;
                  }
                }
                if (date) {
                  if(!task.startDate.includes(date)) {
                    return false;
                  }
                }
                if (priority) {
                  if(task.priority !== priority) {
                    return false;
                  }
                }
                if (completed){ 
                  if((completed === 'true') !== task.completed){
                    return false;
                  }
                }
                return true;
           })
        }
        else{
            return tasks;
        }
    }

}
