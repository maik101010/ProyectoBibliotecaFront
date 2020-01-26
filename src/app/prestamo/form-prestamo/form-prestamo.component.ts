import { Component, OnInit } from '@angular/core';
import {Prestamo} from '../prestamo';
import {Router} from '@angular/router';
import {BackendApiService} from '../../services/backend-api.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-prestamo',
  templateUrl: './form-prestamo.component.html',
  styleUrls: ['./form-prestamo.component.css']
})
export class FormPrestamoComponent implements OnInit {

  private prestamo: Prestamo = new Prestamo();
  constructor(private apiService : BackendApiService, private router: Router ) { }

  ngOnInit() {
  }

  public create() : void {
    this.apiService.crearPrestamo(this.prestamo).subscribe(
      prestamo => {
        if(prestamo.mensaje=='Registrado'){
          this.router.navigate(['/prestamos'])
          swal.fire('Prestamo Guardado', `Prestamo agregado con éxito!`, 'success')
        }else{
          swal.fire('Error Prestamo', prestamo.mensaje , 'error')
        }
    }
    );
  }


}
