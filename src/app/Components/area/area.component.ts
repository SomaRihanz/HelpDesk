import { Component } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent {
  constructor(public api:ApiService){ 
    //this.dataSource=new MatTableDataSource;
    console.log("hola");
  }
}
