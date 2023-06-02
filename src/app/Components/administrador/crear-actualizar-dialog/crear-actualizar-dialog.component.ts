// import { Component, Inject } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



// @Component({
//   selector: 'crear-actualizar-dialog',
//   templateUrl: './crear-actualizar-dialog-component.html',
// })
// export class CrearActualizarDialog {
//   constructor(
//     public dialogRef: MatDialogRef<CrearActualizarDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: any
//   ) { }
  

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }

// import { Component, Inject } from '@angular/core';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// @Component({
//   selector: 'crear-actualizar-dialog',
//   templateUrl: './crear-actualizar-dialog.component.html',  
//   styleUrls: ['./crear-actualizar-dialog.component.css']
// })
// export class CrearActualizarDialog {

//   constructor(
//     public dialogRef: MatDialogRef<CrearActualizarDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: any
//   ) { }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-actualizar-dialog',
  templateUrl: './crear-actualizar-dialog.component.html',
  styleUrls: ['./crear-actualizar-dialog.component.css']
  
})
export class CrearActualizarDialog {

  constructor(
    public dialogRef: MatDialogRef<CrearActualizarDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    
    this.dialogRef.close(this.data); 
  }

}
