import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/categoria';

const URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private readonly http: HttpClient) { }

  public listar(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${URL}/categoria`);
  }

  public buscarPorId(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${URL}/categoria/${id}`);
  }

  public criar(categoria: Categoria): Observable<unknown> {
    return this.http.post(`${URL}/categoria`, categoria);
  }

  public editar({ id, ...categoria }: Categoria): Observable<unknown> {
    return this.http.put(`${URL}/categoria/${id} `, categoria);
  }

  public deletar(id: number): Observable<unknown> {
    return this.http.delete(`${URL}/categoria/${id}`);
  }
}
