import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { ListTasksComponent } from '../list-tasks/list-tasks.component';
import { SnackbarAlertsComponent } from "../snackbar-alerts/snackbar-alerts.component";
import { DialogFormTasksComponent } from "../dialog-form-tasks/dialog-form-tasks.component";

interface filtrosTask {
  campo: string;
  valor: string;
}

@Component({
  selector: 'app-find-tasks',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSidenavModule,
    ReactiveFormsModule,
    CommonModule,
    ListTasksComponent,
    SnackbarAlertsComponent,
    DialogFormTasksComponent
  ],
  templateUrl: './find-tasks.component.html',
  styleUrl: './find-tasks.component.css',
})
export class FindTasksComponent {
  formFilter: FormGroup;

  @ViewChild('selectCampo') selectCampo: ElementRef<HTMLInputElement> | undefined;
  options: string[] = ['ID', 'URGÊNCIA', 'STATUS', 'RESPONSAVEL', 'TÍTULO', 'PREVISÃO DE ENTREGA'];
  filteredOptions: string[]  | undefined;

  constructor(private fb: FormBuilder) {
    this.formFilter = this.fb.group({
      campo: ['STATUS'],
      valor: ['PENDENTE'],
    });
    this.filteredOptions = this.options.slice();
  }

  filter(): void {
    const filterValue = this.selectCampo?.nativeElement.value.toUpperCase() ?? 'STATUS';
    this.filteredOptions = this.options.filter(o => o.toUpperCase().includes(filterValue));
  }

  filtrosTask: filtrosTask[] = [];

  addFiltro() {
    const filtroExistente = this.filtrosTask.find(
      (filtro) =>
        filtro.campo.toUpperCase() === this.formFilter.value.campo.toUpperCase() &&
        filtro.valor.toUpperCase() === this.formFilter.value.valor.toUpperCase()
    );
    if (filtroExistente) {
      this.emitirAlerta('Filtro já adicionado!', 'error', 'Fechar');
      return;
    } else {
      this.formFilter.value.campo = this.formFilter.value.campo.toUpperCase();
      this.formFilter.value.valor = this.formFilter.value.valor.toUpperCase();
      this.filtrosTask.push(this.formFilter.value);
      this.onClear();
    }
  }

  onClear(): void {
    this.formFilter.reset({
      campo: 'STATUS',
      valor: 'PENDENTE',
    });
  }

  onSubmit() {
    if (this.filtrosTask.length > 0) console.log('Filtros enviados:', this.filtrosTask);
    else console.log('Filtros enviados:', this.formFilter.value);
  }

  @ViewChild('drawer') drawer!: MatSidenav;

  removerFiltro(index: number) {
    console.log('index a remover: ', [index, this.filtrosTask[index]]);
    this.filtrosTask.slice(index, 1);
    console.log(this.filtrosTask);
  }

  removerTodosFiltros() {
    this.filtrosTask = [];
  }

  toggle() {
    this.drawer.toggle();
  }

  @ViewChild(SnackbarAlertsComponent) alertsComponent!: SnackbarAlertsComponent;

  emitirAlerta(mensagem: string, type: string, action: string) {
    this.alertsComponent.openSnackBar(mensagem, type, action);
  }

  @ViewChild(DialogFormTasksComponent) dialogFormTasks!: DialogFormTasksComponent;

  openDialogFormTasks() {
    this.dialogFormTasks.openDialog();
  }
}
