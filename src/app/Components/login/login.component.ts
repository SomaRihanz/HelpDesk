import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';
import Swal from 'sweetalert2'
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (public loginservice:LoginService,
    private router: Router) {

  }

  em:any ="";
  pass:any ="";
  loginForm = new FormGroup ( {
    username : new FormControl ('',Validators.required),
    password : new FormControl ('',Validators.required),
  } ) ;
  async onSubmit( ){
    console.log("prueba");
  this.em = this.loginForm.controls["username"].value;
  this.pass = this.loginForm.controls["password"].value;
    if(this.em==="123" && this.pass==="123") {
      Swal.fire(
        'Muy bien!',
         'Se ha logueado correctamente',
         'success'
      )         
      localStorage.setItem('login','login') ;
      this.router.navigate(['/Administrador']);
      this.loginservice.login.next("login");

  }else{
      Swal.fire({
        icon: 'error',
        title: 'Opss', 
        text: 'logueo fallido',
        footer: ''
      })
    }
}
}
