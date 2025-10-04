import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    signal,
    SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { funcionarios } from '../../../toDoData';
import { provideNativeDateAdapter } from '@angular/material/core';
import { toDoModel } from '../../../toDoModel';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogActions } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-form-tasks',
    standalone: true, // Adicionado standalone: true
    imports: [
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        CommonModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatDialogActions,
    ],
    templateUrl: './form-tasks.component.html',
    styleUrls: ['./form-tasks.component.css'], // Corrigido para styleUrls
    providers: [provideNativeDateAdapter()],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormTasksComponent implements OnChanges {
    @Input() taskToEdit: toDoModel | null = null;
    @Output() formSubmitted = new EventEmitter<toDoModel>();
    @Output() cancel = new EventEmitter<void>();

    protected readonly valueTituto = signal('');
    protected readonly valueDescricao = signal('');
    formTask: FormGroup;
    funcionarios: string[] = funcionarios;
    optionsUrgencias: string[] = ['BAIXA', 'MEDIA', 'ALTA', 'PRIORIDADE'];
    optionsStatus: string[] = [
        'PENDENTE',
        'EM EXECUÇÃO',
        'REVISÃO PENDENTE',
        'CONCLUÍDA',
        'APROVADA',
        'CANCELADA',
    ];

    constructor(private fb: FormBuilder) {
        this.formTask = this.fb.group({
            responsaveis: this.fb.control<string[]>([], Validators.required),
            urgencia: ['', Validators.required],
            status: ['', Validators.required],
            titulo: ['', Validators.required],
            descricao: ['', Validators.required],
            previsaoEntrega: ['', Validators.required],
            dataInicio: [''],
            dataEntrega: [''],
        });
    }

    get responsaveisSelecionados(): string[] {
        return this.formTask.get('responsaveis')?.value || [];
    }

    protected onInputTitulo(event: Event) {
        this.valueTituto.set((event.target as HTMLInputElement).value);
    }

    protected onInputDescricao(event: Event) {
        this.valueDescricao.set((event.target as HTMLInputElement).value);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['taskToEdit'] && this.taskToEdit) {
            this.formTask.patchValue(this.taskToEdit);
        }
    }

    onSubmit() {
        if (this.formTask.valid) {
            // Combina os dados do formulário com o ID da tarefa original (se estiver editando)
            const submittedTask: toDoModel = {
                ...this.formTask.value,
                id: this.taskToEdit ? this.taskToEdit.id : 0,
            };
            this.formSubmitted.emit(submittedTask);
        } else {
            this.formTask.markAllAsTouched();
        }
    }
}
