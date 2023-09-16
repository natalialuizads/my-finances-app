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

  public listarContas(): Observable<Conta[]> {
    return this.http.get<Conta[]>(`${URL}/conta`);
  }

  public criarConta(conta: Conta): Observable<unknown> {
    return this.http.post(`${URL}/conta`, conta);
  }
}
