import { AfterViewInit, Component, EventEmitter, Inject, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { toDoModel } from '../../toDoModel';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list-tasks',
  imports: [MatTableModule, MatPaginatorModule, MatDividerModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.css',
})
export class ListTasksComponent implements AfterViewInit, OnChanges {

  @Input() data: toDoModel[] = [];

  @Output() editTask = new EventEmitter<toDoModel>();
  @Output() deleteTask = new EventEmitter<number>();

  displayedColumns: string[] = [
    'id',
    'responsaveis',
    'urgencia',
    'status',
    'titulo',
    'descricao',
    'previsaoEntrega',
    'dataInicio',
    'dataEntrega',
    'delete'
  ];

  dataSource = new MatTableDataSource<toDoModel>(this.data);

  @ViewChild(MatPaginator)
  paginator: MatPaginator = new MatPaginator();

    ngOnChanges(changes: SimpleChanges) {
      if (changes['data']) {
        this.dataSource.data = this.data;
      }
    }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
