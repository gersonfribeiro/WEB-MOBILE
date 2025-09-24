import { Component, signal } from '@angular/core';
import { NavigationDrawer } from './components/navigation-drawer/navigation-drawer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationDrawer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('previsaoTempo');
}
