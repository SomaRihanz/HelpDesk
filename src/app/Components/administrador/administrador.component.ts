import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { CrearActualizarDialog } from './crear-actualizar-dialog/crear-actualizar-dialog-component';
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
  

  constructor(public api:ApiService,
    private dialog: MatDialog,
    private ApiService:ApiService){ 
    this.dataSource=new MatTableDataSource;
  }

    
  ngOnInit():void{
    this.GetAdministrador();
    
  }

  editarRegistro(dato: any){
   this.dialog.open(CrearActualizarDialog, {
      width: '250px',
      data: dato
    });
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


