import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { toDoModel } from '../../toDoModel';
import { toDoData } from '../../toDoData';
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
export class ListTasksComponent implements AfterViewInit {
  data: toDoModel[] = toDoData;

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
  ];
  dataSource = new MatTableDataSource<toDoModel>(this.data);

  @ViewChild(MatPaginator)
  paginator: MatPaginator = new MatPaginator();

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
