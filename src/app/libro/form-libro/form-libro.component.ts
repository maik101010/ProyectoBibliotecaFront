import { Component, OnInit } from '@angular/core';
import {Libro} from '../libro';
import {Router, ActivatedRoute} from '@angular/router';
import {BackendApiService} from '../../services/backend-api.service';

@Component({
  selector: 'app-form-libro',
  templateUrl: './form-libro.component.html',
  styleUrls: ['./form-libro.component.css']
})
export class FormLibroComponent implements OnInit {


  private libro: Libro = new Libro();
  constructor(private apiService : BackendApiService, private router: Router,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
  }



  public create() : void {
    this.apiService.create(this.libro).subscribe(
      libro => {
        this.router.navigate(['/libros'])
        //swal.fire('Cliente Guardado', `Cliente ${cliente.nombre} creado con éxito!`, 'success')
    }
    );
  }
}
