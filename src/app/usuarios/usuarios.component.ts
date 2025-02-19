import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';
import { NgForm } from '@angular/forms';
import { Usuario } from '../interfaces/usuario.interfaces';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {


	// Recepción de datos de la consulta desde query 
	private usuarios:any[] = [];	

  constructor( private _usuariosService:UsuariosService ) { 

  }

  ngOnInit() {
    //$('#TabUsuarios').DataTable();
  	this._usuariosService.getAll().subscribe(respuesta=>{
  		this.usuarios = respuesta;		
  	});
  }

  PreUpdateusuario( ModUsuario:Usuario ){
    
    //this._usuariosService.UsuarioSelecto = Object.assign({}, ModUsuario);

  }

}
