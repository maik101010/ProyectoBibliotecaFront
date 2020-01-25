import { Injectable } from '@angular/core';
import {of, Observable} from 'rxjs';
import {Libro} from '../libro/libro';
import {LIBRO} from '../libro/libro.json'
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  private urlEndPoint:string = 'http://localhost:8080/api/libro'
  private httpHeaders: HttpHeaders =  new HttpHeaders({'Content-Type' :'application/json'});

  constructor(private http: HttpClient ) { }

  getLibros(): Observable<Libro[]>{
    return this.http.get(this.urlEndPoint + '/get').pipe(
      map((response) => response as Libro[])
  );
  }

  create(libro:Libro):Observable<Libro>{
    return this.http.post<Libro>(this.urlEndPoint + "/add", libro, {headers:this.httpHeaders});
  }

  delete(codigoIsbn: String):Observable<Libro>{
    return this.http.delete<Libro>(`${this.urlEndPoint}/delete/${codigoIsbn}`);
  }

}
