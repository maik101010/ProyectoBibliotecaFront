import { Component, OnInit } from '@angular/core';
import {Libro} from '../libro';
import {Router} from '@angular/router';
import {BackendApiService} from '../../services/backend-api.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-libro',
  templateUrl: './form-libro.component.html',
  styleUrls: ['./form-libro.component.css']
})
export class FormLibroComponent implements OnInit {


  private libro: Libro = new Libro();
  constructor(private apiService : BackendApiService, private router: Router ) { }

  ngOnInit() {
  }

  public create() : void {
    this.apiService.crearLibro(this.libro).subscribe(
      libro => {
        this.router.navigate(['/libros'])
        swal.fire('Libro Guardado', `Isbn ${libro.codigoIsbn} agregado con éxito!`, 'success')
    }
    );
  }


}
