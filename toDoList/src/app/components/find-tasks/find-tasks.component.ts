import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { ListTasksComponent } from '../list-tasks/list-tasks.component';
import { SnackbarAlertsComponent } from '../snackbar-alerts/snackbar-alerts.component';
import { DialogFormTasksComponent } from '../dialog-form-tasks/dialog-form-tasks.component';
import { filtrosTask } from '../../models/modelFiltros';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { DrawerComponent } from '../drawer/drawer.component';
import { toDoData } from '../../toDoData';
import { toDoModel } from '../../toDoModel';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-find-tasks',
    standalone: true,
    imports: [
        CommonModule,
        MatSidenavModule,
        FormsModule,
        ReactiveFormsModule,
        ListTasksComponent,
        SnackbarAlertsComponent,
        SearchBarComponent,
        DrawerComponent,
    ],
    templateUrl: './find-tasks.component.html',
    styleUrl: './find-tasks.component.css',
})
export class FindTasksComponent {
    tasks = toDoData;
    formFilter: FormGroup;
    options: string[] = [
        'ID',
        'URGÊNCIA',
        'STATUS',
        'RESPONSAVEL',
        'TÍTULO',
        'PREVISÃO DE ENTREGA',
    ];
    filteredOptions: string[] | undefined;
    filtrosTask: filtrosTask[] = [];

    @ViewChild('drawer') drawer!: MatSidenav;
    @ViewChild(SnackbarAlertsComponent) alertsComponent!: SnackbarAlertsComponent;

    constructor(private fb: FormBuilder, public dialog: MatDialog) {
        this.formFilter = this.fb.group({
            campo: ['STATUS'],
            valor: ['PENDENTE'],
        });
        this.filteredOptions = this.options.slice();
    }

    handleFilterOptions(filterValue: string): void {
        const upperCaseFilter = filterValue.toUpperCase();
        this.filteredOptions = this.options.filter((o) =>
            o.toUpperCase().includes(upperCaseFilter)
        );
    }

    handleAddFiltro() {
        const novoFiltro = this.formFilter.getRawValue();
        novoFiltro.campo = novoFiltro.campo.toUpperCase();
        novoFiltro.valor = novoFiltro.valor.toUpperCase();

        const filtroExistente = this.filtrosTask.find(
            (f) => f.campo === novoFiltro.campo && f.valor === novoFiltro.valor
        );

        if (filtroExistente) {
            this.emitirAlerta('Esse filtro já foi adicionado!', 'error', 'close');
            return;
        }
        this.filtrosTask.push(novoFiltro);
        this.handleClearForm();
        this.emitirAlerta('Novo filtro adicionado!', 'info', 'close');
    }

    handleClearForm(): void {
        this.formFilter.reset({
            campo: 'STATUS',
            valor: 'PENDENTE',
        });
    }

    handleSearch() {
        if (this.filtrosTask.length > 0) {
            console.log('Filtros enviados:', this.filtrosTask);
        } else {
            console.log('Filtro único enviado:', this.formFilter.value);
        }
    }

    handleRemoveFilter(index: number) {
        this.filtrosTask.splice(index, 1);
        this.emitirAlerta('Filtro removido!', 'success', 'close');
    }

    handleRemoveAllFilters() {
        this.filtrosTask = [];
        this.emitirAlerta('Lista de filtros limpa!', 'success', 'close');
    }

    handleToggleDrawer() {
        this.drawer.toggle();
    }

    handleOpenNewTaskDialog(): void {
        const dialogRef = this.dialog.open(DialogFormTasksComponent, {
            width: '800px',
            data: { isEditing: false, task: null },
        });

        dialogRef.afterClosed().subscribe((result: any) => {
            if (result) {
                this.emitirAlerta('Tarefa criada com sucesso!', 'success', 'check');
            }
        });
    }

    handleEditTaskDialog(task: toDoModel): void {
        const dialogRef = this.dialog.open(DialogFormTasksComponent, {
            width: '800px',
            data: { isEditing: true, task: task }, // Envia a tarefa para edição
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                const index = this.tasks.findIndex((t) => t.id === result.id);
                if (index !== -1) {
                    this.tasks[index] = result;
                    this.tasks = [...this.tasks];
                    this.emitirAlerta('Tarefa atualizada com sucesso!', 'success', 'check');
                }
            }
        });
    }

    handleDeleteTask(index: number) {
        this.tasks.splice(index, 1);
        this.tasks = [...this.tasks];
        this.emitirAlerta('Tarefa removida!', 'success', 'close');
    }

    emitirAlerta(mensagem: string, type: string, icon: string) {
        this.alertsComponent.openSnackBar(mensagem, type, icon);
    }
}
