import { Component, OnInit } from '@angular/core';
import {Libro} from '../libro/libro';
import {BackendApiService} from '../services/backend-api.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  public libros:Libro[]

  constructor(private apiService : BackendApiService) { }

  ngOnInit() {
    this.apiService.getLibros().subscribe(
      libros => this.libros = libros
    );
  }


  delete (libro :Libro):void{
    this.apiService.delete(libro.codigoIsbn).subscribe(
      response => {
              this.ngOnInit();
            }
          );
  }

}
