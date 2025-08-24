import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-snackbar-alerts',
  imports: [MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './snackbar-alerts.component.html',
  styleUrl: './snackbar-alerts.component.css',
})
export class SnackbarAlertsComponent {
  private _snackBar = inject(MatSnackBar);

  mensagem = '';
  typeSnackbar = '';
  durationInSeconds = 5;

  openSnackBar(mensagem: string, typeSnackbar: string, action?: string) {
    this._snackBar.openFromComponent(SnackbarAlertComponent, {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: this.durationInSeconds * 1000,
      data: { mensagem, typeSnackbar, action }
    });
  }
}

import { Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-snackbar-alert',
  imports: [CommonModule, MatButtonModule, MatIconModule,],
  templateUrl: './snackbar-alert.component.html',
  styleUrl: './snackbar-alerts.component.css',
})
export class SnackbarAlertComponent {
  constructor(
    public snackBarRef: MatSnackBarRef<SnackbarAlertComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: { mensagem: string; type: string, action?: string }
  ) {}

  onActionClick() {
    this.snackBarRef.dismiss();
  }
}
