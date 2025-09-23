// src/app/components/drawer/drawer.component.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { filtrosTask } from '../../models/modelFiltros';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent {
  @Input() filtros: filtrosTask[] = [];
  @Output() removeFilter = new EventEmitter<number>();
  @Output() removeAllFilters = new EventEmitter<void>();
}
