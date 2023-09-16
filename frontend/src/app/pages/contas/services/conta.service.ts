import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private readonly http: HttpClient) { }

  public listarContas(): Observable<any> {
    return this.http.get(`${URL}/conta`);
  }

  public criarConta(conta: any): Observable<any> {
    return this.http.post(`${URL}/conta`, conta);
  }
}
