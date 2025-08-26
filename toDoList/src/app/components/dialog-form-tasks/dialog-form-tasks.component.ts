import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormTasksComponent } from './form-tasks/form-tasks.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dialog-form-tasks',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dialog-form-tasks.component.html',
  styleUrl: './dialog-form-tasks.component.css',
})
export class DialogFormTasksComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogFormTaskComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'app-dialog-form-tasks',
  imports: [MatDialogModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, FormTasksComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dialog-form-task.component.html',
  styleUrl: './dialog-form-tasks.component.css',
})
export class DialogFormTaskComponent {
  isEditing: boolean = false;
}
