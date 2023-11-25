import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Balanco } from '../interfaces/balanco';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class BalancoService {

  constructor(private readonly http: HttpClient) { }

  buscar() : Observable<Balanco> {
    return this.http.get<Balanco>(`${URL}/balanco`)
  }
}
