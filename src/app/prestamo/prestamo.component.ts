import { Component, OnInit } from '@angular/core';
import {Prestamo} from '../prestamo/prestamo';
import {BackendApiService} from '../services/backend-api.service';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
})
export class PrestamoComponent implements OnInit {

  public prestamos:Prestamo[]

  constructor(private apiService : BackendApiService) { }

  ngOnInit() {
    this.apiService.obtenerPrestamos().subscribe(
      prestamos => this.prestamos = prestamos
    );
  }

}
