import { Component } from '@angular/core';
import { FindTasksComponent } from "../find-tasks/find-tasks.component";

@Component({
  selector: 'ToDoList',
  imports: [FindTasksComponent],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css'
})
export class ToDoList {

}
