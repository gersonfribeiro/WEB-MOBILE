import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormTasksComponent } from './form-tasks/form-tasks.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { toDoModel } from '../../toDoModel';

export interface DialogData {
    isEditing: boolean;
    task: toDoModel;
}

@Component({
    selector: 'app-dialog-form-tasks',
    standalone: true,
    imports: [
        MatDialogModule,
        FormTasksComponent
    ],
    templateUrl: './dialog-form-tasks.component.html',
    styleUrl: './dialog-form-tasks.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogFormTasksComponent {
    isEditing: boolean;
    task: toDoModel | null;

    constructor(
        public dialogRef: MatDialogRef<DialogFormTasksComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
        this.isEditing = data.isEditing;
        this.task = data.task;
    }

    onFormSubmit(formData: toDoModel) {
        this.dialogRef.close(formData);
    }

    onCancel(): void {
        this.dialogRef.close();
    }
}
