import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
    selector: 'app-navigation-bar',
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, MatIconModule],
    templateUrl: './navigation-bar.html',
    styleUrl: './navigation-bar.css'
})
export class NavigationBar {
    @Input() drawer!: MatDrawer;
}
