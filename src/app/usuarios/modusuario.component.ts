import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../interfaces/usuario.interfaces';
import { UsuarioService } from '../servicios/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-modusuario',
  templateUrl: './modusuario.component.html',
  styleUrls: ['./modusuario.component.css']
})
export class ModusuarioComponent implements OnInit {

	//console.log("Aca va el areglo");
	//console.log(this.usuarios);
	//private usuarios:any[] = [];	
  usuario:Usuario = {
    key:0,
    nombre:'',
    email:'',
    clave:'',
    permiso:''
  }
	
  private UsuarioSelecto:any;
  id:string;

  constructor(private usuariosService:UsuariosService,
          private usuarioService:UsuarioService,
  			  private router:Router,
  			  private ruta:ActivatedRoute ) { 
  	
  }

  ngOnInit() {
  
  this.ruta.params.subscribe( parametros=>{
      // Trae el usuario seleccionado
      this.usuariosService.getONE(parametros.id).subscribe(respuesta=>{
        this.UsuarioSelecto = respuesta[0];
        });
        
      });
    
			}

  guardarMod( FormUsuarioM : NgForm ) :void {
      // Modifica el Usuario
      console.log("ACa va le formulario", FormUsuarioM);
      this.usuario = FormUsuarioM.value;
      console.log("Aca !!!!  va el formulario de modifica");
      console.log(this.usuario);
      console.log("EL id que va air es :" , this.UsuarioSelecto.id );
      console.log("Este es el id que va", this.id);
      this.usuarioService.ModificaUsuario( this.usuario, this.UsuarioSelecto.id ).subscribe( data=>{
        if(data.resultado){
          console.log(this.UsuarioSelecto);
          window.alert("Usuario Modificado");
        } else {
          window.alert("Error al Modificar");
        }
      })
      console.log("Modifica un Usuario");
      console.log(this.UsuarioSelecto);
    }
  }

