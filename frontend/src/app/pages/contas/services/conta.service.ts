import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conta } from '../interfaces/conta';

const URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private readonly http: HttpClient) { }

  public listar(): Observable<Conta[]> {
    return this.http.get<Conta[]>(`${URL}/conta`);
  }

  public criar(conta: Conta): Observable<unknown> {
    return this.http.post(`${URL}/conta`, conta);
  }

  public editar({ id, ...conta }: Conta): Observable<unknown> {
    return this.http.put(`${URL}/conta/${id}, `, conta);
  }

  public deletar(id: number): Observable<unknown> {
    return this.http.delete(`${URL}/conta/${id}`);
  }
}
