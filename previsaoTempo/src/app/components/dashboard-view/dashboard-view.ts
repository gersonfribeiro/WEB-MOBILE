import { Component } from '@angular/core';
import { SearchCidade } from '../search-cidade/search-cidade';

@Component({
  selector: 'app-dashboard-view',
  standalone: true,
  imports: [SearchCidade],
  templateUrl: './dashboard-view.html',
  styleUrl: './dashboard-view.css'
})
export class DashboardView {

}
