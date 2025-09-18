import { Component } from '@angular/core';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation-drawer',
  standalone: true,
  imports: [RouterOutlet, NavigationBar, MatSidenavModule],
  templateUrl: './navigation-drawer.html',
  styleUrl: './navigation-drawer.css'
})
export class NavigationDrawer {

}
