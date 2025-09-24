import { Component } from '@angular/core';
import { ListPrevisoes } from '../list-previsoes/list-previsoes';

@Component({
  selector: 'app-search-cidade',
  standalone: true,
  imports: [ListPrevisoes],
  templateUrl: './search-cidade.html',
  styleUrl: './search-cidade.css'
})
export class SearchCidade {

}
