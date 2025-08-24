import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-form-tasks',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './form-tasks.component.html',
  styleUrl: './form-tasks.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormTasksComponent {
  protected readonly value = signal('');

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }
}
