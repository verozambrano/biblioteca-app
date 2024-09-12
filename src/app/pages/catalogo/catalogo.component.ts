import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../libros.service';


@Component({
  selector: 'app-catalogo-libros',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoLibrosComponent implements OnInit {
  libros: any[] = [];

  constructor(private librosService: LibrosService) {}

  ngOnInit(): void {
    this.librosService.getLibros().subscribe((data) => {
      this.libros = data;
    });
  }
}
