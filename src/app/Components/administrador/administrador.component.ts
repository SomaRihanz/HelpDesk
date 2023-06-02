import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { CrearActualizarDialog } from './crear-actualizar-dialog/crear-actualizar-dialog.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  displayedColumns: string[]=[]
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;  
  @ViewChild(MatSort) sort!: MatSort;
  dataService: any;
  

  constructor(public api:ApiService,
    private dialog: MatDialog,
    private ApiService:ApiService){ 
    this.dataSource=new MatTableDataSource;
  }

    
  ngOnInit():void{
    this.GetAdministrador();
    
  }

  // editarRegistro(dato: any){
  //  this.dialog.open(CrearActualizarDialog, {
  //     width: '250px',
  //     data: dato
  //   });
  // }
  // editarRegistro(dato: any) {
  //   const dialogRef = this.dialog.open(CrearActualizarDialog, {
  //     width: '250px',
  //     data: dato
  //   });
  
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result.isConfirmed)  {
  //       // Aquí puedes realizar la lógica de actualización del registro en la base de datos
  //       this.ApiService.actualizarRegistro(result).subscribe(
  //         (response:any) => {
  //           // Aquí puedes manejar la respuesta exitosa de la actualización
  //           console.log('Registro actualizado exitosamente');
  //         },
  //         (error:any) => {
  //           // Aquí puedes manejar el error en caso de que ocurra durante la actualización
  //           console.error('Error al actualizar el registro', error);
  //           // Puedes mostrar un mensaje de error al usuario, por ejemplo, utilizando un servicio de notificación
  //         }
  //       );
  //     }
  //   });
  // }
  
  editarRegistro(dato: any) {
    const dialogRef = this.dialog.open(CrearActualizarDialog, {
      width: '250px',
      data: dato
    });
  
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result === true) {
    //     // Aquí puedes realizar la lógica de actualización del registro en la base de datos
    //     this.ApiService.actualizarRegistro(dato).subscribe(
    //       (response: any) => {
    //         // Aquí puedes manejar la respuesta exitosa de la actualización
    //         console.log('Registro actualizado exitosamente');
    //       },
    //       (error: any) => {
    //         // Aquí puedes manejar el error en caso de que ocurra durante la actualización
    //         console.error('Error al actualizar el registro', error);
    //         // Puedes mostrar un mensaje de error al usuario, por ejemplo, utilizando un servicio de notificación
    //       }
    //     );
    //   }
    // });
  }
  
    
  

  eliminarRegistro(id:any):void{
    

    Swal.fire({
      title: 'Estas seguro?',
      text: "Desea eliminar este administrador!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ApiService.Delete('Administrador', id).then((res) => {

        });
        this.GetAdministrador();
        Swal.fire(
          'Eliminado!',
          'Este administrador ha sido eliminado.',
          'success'
        )
      }
    })
  }


  public async GetAdministrador(){
   await this.api.get("Administrador").then((res)=>{
      this.loadTable([res[0]])
      console.log(res)
      this.dataSource.data=res
     //console.log(this.dataSource.data);
    });
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    //console.log(response);
  }
  loadTable(data:any[]){

      const columnNames = Object.keys(data[0]);

      const updatedColumns = [...columnNames, 'acciones'];
       this.displayedColumns = updatedColumns;

       console.log( this.displayedColumns)
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


