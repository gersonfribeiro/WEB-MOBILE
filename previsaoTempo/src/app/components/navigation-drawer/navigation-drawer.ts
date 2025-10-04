import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PrevisaoService } from '../../services/previsao.service';

export interface pathParamsConsultaAPI {
    location: string | null;
    startDate?: Date | null;
    endDate?: Date | null;
}

@Component({
    selector: 'app-navigation-drawer',
    standalone: true,
    imports: [
        RouterOutlet,
        NavigationBar,
        MatSidenavModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDatepickerModule,
        MatButtonModule,
        MatIconModule,
    ],
    providers: [provideNativeDateAdapter()],
    templateUrl: './navigation-drawer.html',
    styleUrl: './navigation-drawer.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationDrawer implements OnInit {
    readonly buscarPrevisaoForm = new FormGroup({
        location: new FormControl<string | null>('Ubá, MG'),
        startDate: new FormControl<Date | null>(new Date()),
        endDate: new FormControl<Date | null>(null),
    });

    private previsaoService = inject(PrevisaoService);

    consultarAPI(): void {
        const formValues = this.buscarPrevisaoForm.value;
        if (this.buscarPrevisaoForm.valid && formValues.location) {
            this.previsaoService.buscarPrevisao({
                location: formValues.location,
                startDate: formValues.startDate,
                endDate: formValues.endDate,
            });
        }
    }

    ngOnInit(): void {
        this.consultarAPI();
    }
}
