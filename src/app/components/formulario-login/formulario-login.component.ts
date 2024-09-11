import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {
 correo:any=""
 contraseña:any=""
  login(form: NgForm){
 console.log(form.value)
  }
}
