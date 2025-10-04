import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PrevisaoService } from '../../services/previsao.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-list-previsoes',
    standalone: true,
    imports: [MatTableModule, MatPaginatorModule, CommonModule],
    templateUrl: './list-previsoes.html',
    styleUrl: './list-previsoes.css'
})
export class ListPrevisoes implements OnInit, AfterViewInit, OnDestroy {
    private previsaoService = inject(PrevisaoService);
    private subscription: Subscription = new Subscription();

    // Colunas que a tabela irá exibir
    displayedColumns: string[] = ['datetime', 'temp', 'humidity', 'conditions'];
    dataSource = new MatTableDataSource<any>([]); // Inicializa vazio

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngOnInit(): void {
        // Inscreve-se para receber os dados da previsão
        this.subscription = this.previsaoService.previsaoData$.subscribe(previsao => {
            if (previsao && previsao.days) {
                this.dataSource.data = previsao.days;
            } else {
                this.dataSource.data = [];
            }
        });
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    ngOnDestroy(): void {
        // Cancela a inscrição para evitar vazamentos de memória
        this.subscription.unsubscribe();
    }
}
