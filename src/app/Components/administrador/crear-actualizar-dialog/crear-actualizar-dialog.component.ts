import { Component, Inject, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-crear-actualizar-dialog',
  templateUrl: './crear-actualizar-dialog.component.html',
  styleUrls: ['./crear-actualizar-dialog.component.css']
  
})

export class CrearActualizarDialog

implements OnInit{
  formEditarUsuario!: FormGroup;
  id: any;
  tipoFormulario: 'creacion' | 'actualizacion' = 'creacion';
  informacionUsuario: any;

  constructor(
    private fb: UntypedFormBuilder,
    private apiservice: ApiService,
    public dialogRef: MatDialogRef<CrearActualizarDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
   
    if(data){
      this.tipoFormulario = 'actualizacion';
      this.informacionUsuario = {...data};
      this.id = this.informacionUsuario.id
      console.log( this.informacionUsuario.idAdministrador)
    }else{this.tipoFormulario = 'creacion'}

  
   }
  ngOnInit(): void {
    this.formEditarUsuario = this.fb.group({
      nombre: [null, Validators.required],
      cedula: [null, Validators.required],
      id: [null, Validators.required],
      rol: [null, Validators.required],
    });

    if (this.tipoFormulario ==='actualizacion'){
      this.formEditarUsuario.updateValueAndValidity();
      this.formEditarUsuario.patchValue(this.informacionUsuario)
    }
   }
  
   accion(){
    console.log(this.tipoFormulario)
    if(this.tipoFormulario == 'creacion'){
      this.apiservice.Post("Administrador", this.formEditarUsuario.getRawValue())
    .then((res)=>{
      console.log (res)
    })
    }else if(this.tipoFormulario == 'actualizacion'){
      const formulario = {
        idAdministrador: this.informacionUsuario.idAdministrador,
        ...this.formEditarUsuario.getRawValue()
      }
      this.apiservice.Put("Administrador", this.id, formulario)
    .then((res)=>{
      console.log (res)
    })
    }

   }
   

  onNoClick(): void {
    this.dialogRef.close();
      
  }

  onSubmit(): void {
    console.log(this.formEditarUsuario.getRawValue())
    this.dialogRef.close(this.data); 
    this.apiservice.Put("Administrador", this.id, this.formEditarUsuario.getRawValue())
    .then((res)=>{
      console.log (res)
    })
  }

}
