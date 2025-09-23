// src/app/components/search-bar/search-bar.component.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  @Input() formFilter!: FormGroup;
  @Input() filteredOptions: string[] | undefined;

  @Output() addFilter = new EventEmitter<void>();
  @Output() search = new EventEmitter<void>();
  @Output() clearForm = new EventEmitter<void>();
  @Output() toggleDrawer = new EventEmitter<void>();
  @Output() filterOptions = new EventEmitter<string>();
  @Output() openNewTaskDialog = new EventEmitter<void>();

  onFilterOptions(value: string) {
    this.filterOptions.emit(value);
  }
}
