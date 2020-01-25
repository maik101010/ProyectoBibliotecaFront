import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';
import { PrestamoComponent } from './prestamo/prestamo.component';
import { BackendApiService } from './services/backend-api.service';
import { FormLibroComponent } from './libro/form-libro/form-libro.component';

const routes:Routes = [
  {path: '', redirectTo: '/libros', pathMatch:'full'},
  {path: 'libros', component: LibroComponent},
  {path: 'libros/form', component: FormLibroComponent},
    {path: 'libros/form/:codigoIsbn', component: FormLibroComponent},
  {path: 'prestamos', component: PrestamoComponent}
//  {path: 'libros/form', component: FormComponent},
//  {path: 'clienlibrostes/form/:id', component: FormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    PrestamoComponent,
    FormLibroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BackendApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
