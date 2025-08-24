import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-find-tasks',
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './find-tasks.component.html',
  styleUrl: './find-tasks.component.css',
})
export class FindTasksComponent implements OnInit {
  formFilter: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formFilter = this.fb.group({
      campo: ['status'], // string
      valor: ['PENDENTE'], // string
    });
  }
  options: string[] = ['id', 'urgencia', 'status', 'responsável', 'título', 'previsao de entrega'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.formFilter.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) => option.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    console.log('Filtro enviado:', this.formFilter.value);
    // Exemplo: { campo: 'nome', valor: 'Gerson' }
  }
}
