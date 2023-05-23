import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'crear-actualizar-dialog',
  templateUrl: './crear-actualizar-dialog-component.html',
})
export class CrearActualizarDialog {
  constructor(
    public dialogRef: MatDialogRef<CrearActualizarDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}