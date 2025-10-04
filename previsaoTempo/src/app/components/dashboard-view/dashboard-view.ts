import { Component } from '@angular/core';
import { ListPrevisoes } from "../list-previsoes/list-previsoes";

@Component({
  selector: 'app-dashboard-view',
  standalone: true,
  imports: [ListPrevisoes],
  templateUrl: './dashboard-view.html',
  styleUrl: './dashboard-view.css'
})
export class DashboardView {

}
