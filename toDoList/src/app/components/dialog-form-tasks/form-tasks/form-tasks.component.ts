import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { funcionarios } from '../../../toDoData';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-form-tasks',
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
  ],
  templateUrl: './form-tasks.component.html',
  styleUrl: './form-tasks.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormTasksComponent {
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
      responsaveis: this.fb.control<string[]>([]),
      urgencia: [''],
      status: [''],
      titulo: [''],
      descricao: [''],
      previsaoEntrega: [''],
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

  onSubmit() {}
}
