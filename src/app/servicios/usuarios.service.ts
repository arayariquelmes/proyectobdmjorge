import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interfaces'


@Injectable()
export class UsuariosService {

	private usuarios:any[] = [];
	
	constructor( private http: HttpClient ) {

		console.log("Servicio Importar Usuarios Listo");
		
											} 
	getAll():Observable<any>{
		return this.http.get('http://localhost/apibdm/usuarios/consultau.php');
							}


	public UsuarioSelecto: Usuario = {
		key:0,
		nombre:'',
		email:'',
		clave:'',
		permiso:''
									  };
	getONE(id):Observable<any>{
  		
		return this.http.get('http://localhost/apibdm/usuarios/traeunou.php?id='+id);
	}


}