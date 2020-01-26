import { Component, OnInit } from '@angular/core';
import {Libro} from '../libro/libro';
import {BackendApiService} from '../services/backend-api.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  public libros:Libro[]

  constructor(private apiService : BackendApiService) { }

  ngOnInit() {
    this.apiService.obtenerLibros().subscribe(
      libros => this.libros = libros
    );
  }


  delete (libro :Libro):void{

    const swalWithBootstrapButtons = swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

swalWithBootstrapButtons.fire({
        title: 'Está seguro?',
        text: `Seguro que desea eliminar el libro`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          this.apiService.eliminarLibro(libro.codigoIsbn).subscribe(
            response => {
                    this.ngOnInit();
            }
          );

        }
      })
  }

}
