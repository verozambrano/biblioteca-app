import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private url = 'assets/libros.json';

  constructor(private http: HttpClient) {}

  getLibros(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
