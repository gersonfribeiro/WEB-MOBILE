import { Injectable, inject } from "@angular/core";
import { pathParamsConsultaAPI } from "../components/navigation-drawer/navigation-drawer";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

// Interface para os dados da previsão
export interface Previsao {
    address: string;
    days: any[];
    // Adicione outras propriedades que a API retorna
}

@Injectable({
    providedIn: "root"
})
export class PrevisaoService {
    private readonly baseUrl: string = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
    // Adicione sua API Key aqui
    private readonly apiKey: string = "SWEBXJXN6JNZM2BY5E2F6ADTX";
    private http = inject(HttpClient);

    // BehaviorSubject para armazenar e emitir os dados da previsão
    private previsaoDataSource = new BehaviorSubject<Previsao | null>(null);
    // Observable público para os componentes se inscreverem
    previsaoData$ = this.previsaoDataSource.asObservable();

    buscarPrevisao(pathParams: pathParamsConsultaAPI): void {
        const url = this.montarUrl(pathParams);

        this.http.get<Previsao>(url).subscribe({
            next: (data) => {
                // Emite os novos dados para todos os inscritos
                this.previsaoDataSource.next(data);
            },
            error: (error) => {
                console.error("Erro ao buscar previsão:", error);
                // Opcional: emitir um erro ou um valor nulo
                this.previsaoDataSource.next(null);
            }
        });
    }

    private montarUrl(pathParams: pathParamsConsultaAPI): string {
        let params = "";

        if (pathParams.location) {
            params += pathParams.location;

            if (pathParams.startDate) {
                params += "/" + this.formatarData(pathParams.startDate);

                if (pathParams.endDate) {
                    params += "/" + this.formatarData(pathParams.endDate);
                }
            }
        }
        // Adiciona a API Key e outros parâmetros necessários
        return `${this.baseUrl}${params}?unitGroup=metric&key=${this.apiKey}&contentType=json`;
    }

    // Helper para formatar a data para o formato YYYY-MM-DD
    private formatarData(date: Date): string {
        return date.toISOString().split('T')[0];
    }
}
