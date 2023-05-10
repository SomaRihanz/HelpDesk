import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

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
  

  constructor(public api:ApiService){ 
    this.dataSource=new MatTableDataSource;
  }

    
  ngOnInit():void{
    this.GetAdministrador();
    
  }

  public async GetAdministrador(){
   await this.api.get("Administrador").then((res)=>{
      this.loadTable([res[0]])
      this.dataSource.data=res
     //console.log(this.dataSource.data);
    });
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    //console.log(response);
  }
  loadTable(data:any[]){
    for(let column in data[0]){
      this.displayedColumns.push(column)
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


