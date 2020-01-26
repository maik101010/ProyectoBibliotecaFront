import { Injectable } from '@angular/core';
import {of, Observable} from 'rxjs';
import {Libro} from '../libro/libro';
import {Prestamo} from '../prestamo/prestamo';
import {Respuesta} from '../prestamo/respuesta';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  private urlEndPointLibro:string = 'http://localhost:8080/api/libro'
  private urlEndPointPrestamo:string = 'http://localhost:8080/api/prestamo'
  private httpHeaders: HttpHeaders =  new HttpHeaders({'Content-Type' :'application/json'});

  constructor(private http: HttpClient ) { }

  obtenerLibros(): Observable<Libro[]>{
    return this.http.get(this.urlEndPointLibro + '/get').pipe(
      map((response) => response as Libro[])
  );
  }

  crearLibro(libro:Libro):Observable<Libro>{
    return this.http.post<Libro>(this.urlEndPointLibro + "/add", libro, {headers:this.httpHeaders});
  }

  eliminarLibro(codigoIsbn: String):Observable<Libro>{
    return this.http.delete<Libro>(`${this.urlEndPointLibro}/delete/${codigoIsbn}`);
  }

  obtenerPrestamos(): Observable<Prestamo[]>{
    return this.http.get(this.urlEndPointPrestamo + '/get').pipe(
      map((response) => response as Prestamo[])
  );
  }
  crearPrestamo(prestamo:Prestamo):Observable<Respuesta>{
    return this.http.post<Respuesta>(this.urlEndPointPrestamo + "/add", prestamo, {headers:this.httpHeaders});
  }

}
