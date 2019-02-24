import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ComprobanteService {
  constructor(private http: HttpClient) {}
  getComprobante() {
    return this.http.get('http://api/comprobantes');
  }
  insertComprobante(comprobante) {
    return this.http.post('http://api/comprobante', comprobante).subscribe();
  }
}
