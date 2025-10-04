import { Component, OnInit, ViewChild } from '@angular/core';
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
    styleUrls: ['./find-tasks.component.css'],
})
export class FindTasksComponent implements OnInit {
    private LOCAL_STORAGE_KEY = 'tasks';
    tasks: toDoModel[] = [];
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
    }

    ngOnInit(): void {
      this.initLocalStorage();
      this.loadTasks();
      this.filteredOptions = this.options.slice();
    }

    initLocalStorage(): void {
      if (!localStorage.getItem(this.LOCAL_STORAGE_KEY)) {
        localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(toDoData));
      }
    }

    getTasks(): toDoModel[] {
      const tasks = localStorage.getItem(this.LOCAL_STORAGE_KEY);
      return tasks ? JSON.parse(tasks) : [];
    }

    private updateTasks(tasks: toDoModel[]): void {
      localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(tasks));
      this.loadTasks();
    }

    private generateId(): number {
      const tasks = this.getTasks();
      return tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    }

    loadTasks(): void {
        this.tasks = this.getTasks();
    }

    handleFilterOptions(filterValue: string): void {
        const upperCaseFilter = filterValue.toUpperCase();
        this.filteredOptions = this.options.filter((o) =>
            o.toUpperCase().includes(upperCaseFilter)
        );
    }

    handleAddFiltro() {
        const novoFiltro = this.formFilter.getRawValue();
        if (!novoFiltro.campo || !novoFiltro.valor) {
            this.emitirAlerta('Preencha os campos para adicionar um filtro!', 'error', 'close');
            return;
        }
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
        this.handleSearch();
    }

    handleClearForm(): void {
        this.formFilter.reset({
            campo: 'STATUS',
            valor: 'PENDENTE',
        });
    }

    handleSearch() {
        let tasksFiltradas = this.getTasks();
        if (this.filtrosTask.length > 0) {
            this.filtrosTask.forEach(filtro => {
                tasksFiltradas = this.filtrar(tasksFiltradas, filtro.campo, filtro.valor);
            });
        } else {
          const { campo, valor } = this.formFilter.value;
          if (campo && valor) {
            tasksFiltradas = this.filtrar(tasksFiltradas, campo, valor);
          }
        }
        this.tasks = tasksFiltradas;
    }

    filtrar(tasks: toDoModel[], campo: string, valor: string): toDoModel[] {
      const valorLowerCase = valor.toLowerCase();
      return tasks.filter(task => {
        switch (campo.toUpperCase()) {
          case 'ID':
            return task.id.toString().includes(valorLowerCase);
          case 'URGÊNCIA':
            return task.urgencia.toLowerCase().includes(valorLowerCase);
          case 'STATUS':
            return task.status.toLowerCase().includes(valorLowerCase);
          case 'RESPONSAVEL':
            return task.responsaveis.some(r => r.toLowerCase().includes(valorLowerCase));
          case 'TÍTULO':
            return task.titulo.toLowerCase().includes(valorLowerCase);
          case 'PREVISÃO DE ENTREGA':
            return new Date(task.previsaoEntrega).toLocaleDateString().includes(valorLowerCase);
          default:
            return true;
        }
      });
    }

    handleRemoveFilter(index: number) {
        this.filtrosTask.splice(index, 1);
        this.emitirAlerta('Filtro removido!', 'success', 'close');
        this.handleSearch();
    }

    handleRemoveAllFilters() {
        this.filtrosTask = [];
        this.loadTasks();
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
                const tasks = this.getTasks();
                result.id = this.generateId();
                tasks.push(result);
                this.updateTasks(tasks);
                this.emitirAlerta('Tarefa criada com sucesso!', 'success', 'check');
            }
        });
    }

    handleEditTaskDialog(task: toDoModel): void {
        const dialogRef = this.dialog.open(DialogFormTasksComponent, {
            width: '800px',
            data: { isEditing: true, task: { ...task } },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                let tasks = this.getTasks();
                const index = tasks.findIndex((t) => t.id === result.id);
                if (index !== -1) {
                    tasks[index] = result;
                    this.updateTasks(tasks);
                    this.emitirAlerta('Tarefa atualizada com sucesso!', 'success', 'check');
                }
            }
        });
    }

    handleDeleteTask(id: number) {
      const tasks = this.getTasks();
      const taskIndex = tasks.findIndex(t => t.id === id);
      if (taskIndex > -1) {
        tasks.splice(taskIndex, 1);
        this.updateTasks(tasks);
        this.emitirAlerta('Tarefa removida!', 'success', 'close');
      }
    }

    emitirAlerta(mensagem: string, type: string, icon: string) {
        this.alertsComponent.openSnackBar(mensagem, type, icon);
    }
}
