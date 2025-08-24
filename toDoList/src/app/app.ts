import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FindTasksComponent } from "./components/find-tasks/find-tasks.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FindTasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
